class Repo < ApplicationRecord
  include ActiveModel::Serializers::JSON

  has_many :reviews
  has_many :alternative_repos
  has_many :examples
  has_many :repo_tags
  has_many :tags, through: :repo_tags

  def recalculate_rating
    #@reviews = self.reviews
    # self.reviews doesn't return the correct results because of 'id' vs 'slug'
    @reviews = Review.where(repo: self)
    self.total_reviews = @reviews.length

    if !@reviews.empty?
      @average = @reviews.map(&:rating).reduce(:+) / @reviews.length.to_f
      self.average_rating = @average
      self.save
    end
  end

  def api_url
    "#{ENV["WEB_URL"]}/api/v1"
  end

  def github_url
    "https://github.com/#{user_slug}/#{repo_slug}"
  end

  def repo_url
    "#{api_url}/users/#{user_slug}/repos/#{repo_slug}"
  end

  def attributes
    {
      "id": id,
      "user_slug": user_slug,
      "repo_slug": repo_slug,
      "github_url": github_url,
      "repo_url": repo_url,
      "average_rating": average_rating,
      "total_reviews": total_reviews,
      "description": description,
      "language": language,
      "size": size,
      "homepage": homepage,
      "fork": fork,
      "last_update": last_update,
      "forks_count": forks_count,
      "open_issues_count": open_issues_count,
      "subscribers_count": subscribers_count,
    }
  end

  # transform GitHub API repos to RepoRev format
  def self.transform_repo(github_repo)
    user_slug = github_repo["owner"]["login"]
    repo_slug = github_repo["name"]

    {
      from_github: true,
      user_slug: user_slug,
      repo_slug: repo_slug,
      github_url: github_repo["html_url"],
      repo_url: "#{ENV["WEB_URL"]}/api/v1/users/#{user_slug}/repos/#{repo_slug}",
      description: github_repo["description"],
      language: github_repo["language"],
      size: github_repo["size"],
      homepage: github_repo["homepage"],
      fork: github_repo["fork"],
      last_update: github_repo["updated_at"],
      forks_count: github_repo["forks_count"],
      open_issues_count: github_repo["open_issues_count"],
      subscribers_count: github_repo["subscribers_count"],
    }
  end

  def self.all_from_github(user_slug, reporev_repos)
    url = "https://#{ENV["GITHUB_ACCESS_TOKEN"]}@api.github.com/users/#{user_slug}/repos"
    # filter out the repos that are already in our database
    github_repos = JSON.parse(RestClient.get(url))
    filtered_repos = nil

    if reporev_repos
      filtered_repos = github_repos.select do |github_repo|
        reporev_repos.map do |repo|
          repo["repo_slug"]
        end.exclude?(github_repo["name"])
      end
    end

    filtered_repos.map { |repo| Repo.transform_repo(repo) }
  end

  def self.from_github(user_slug, repo_slug)
    url = "https://#{ENV["GITHUB_ACCESS_TOKEN"]}@api.github.com/repos/#{user_slug}/#{repo_slug}"
    transform_repo(JSON.parse(RestClient.get(url)))
  end

  def self.save_from_github(user_slug, repo_slug)
    repo_data = Repo.from_github(user_slug, repo_slug)
    repo_data.delete(:from_github)
    repo_data.delete(:github_url)
    repo_data.delete(:repo_url)
    Repo.create(repo_data)
  end

  validates_presence_of :user_slug, :repo_slug, :total_reviews
  validates_numericality_of :average_rating, greater_than_or_equal_to: 0, less_than_or_equal_to: 5, allow_nil: true
end
