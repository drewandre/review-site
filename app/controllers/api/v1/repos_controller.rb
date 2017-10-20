class Api::V1::ReposController < ApplicationController
  def index
    @repos = Repo.all
    render json: @repos
  end

  # transform GitHub API repos to RepoRev format
  def transform_repo(github_repo)
    user_slug = github_repo["owner"]["login"]
    repo_slug = github_repo["name"]

    {
      from_github: true,
      user_slug: user_slug,
      repo_slug: repo_slug,
      github_url: github_repo["html_url"],
      repo_url: "http://localhost:3000/api/v1/users/#{user_slug}/repos/#{repo_slug}",
    }
  end

  def user_repos_index
    user_slug = params[:user_slug]

    @reporev_repos = Repo.where(user_slug: user_slug)

    url = "https://#{ENV["GITHUB_ACCESS_TOKEN"]}@api.github.com/users/#{user_slug}/repos"
    # filter out the repos that are already in our database
    @github_repos = JSON.parse(RestClient.get(url)).select do |github_repo|
      @reporev_repos.map do |repo|
        repo["repo_slug"]
      end.exclude?(github_repo["name"])
    end.map { |repo| transform_repo(repo) }

    render json: {
      repos: @reporev_repos.map { |repo| {from_github: false}.merge(repo.as_json) },
      github_repos: @github_repos
    }
  end

  def show
    user_slug = params[:user_slug]
    repo_slug = params[:repo_slug]

    @repo = Repo.find_by(
      user_slug: user_slug,
      repo_slug: repo_slug
    )

    if !@repo
      url = "https://#{ENV["GITHUB_ACCESS_TOKEN"]}@api.github.com/repos/#{user_slug}/#{repo_slug}"
      @repo = transform_repo(JSON.parse(RestClient.get(url)))
    end

    render json: {from_github: false}.merge(@repo.as_json)
  end
end
