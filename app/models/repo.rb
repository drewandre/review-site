class Repo < ApplicationRecord
  include ActiveModel::Serializers::JSON

  has_many :reviews
  has_many :alternative_repos
  has_many :examples
  has_many :repo_tags
  has_many :tags, through: :repo_tags

  def api_url
    "http://localhost:3000/api/v1"
    #"https://reporev.herokuapp.com/api/v1"
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
      "total_reviews": total_reviews
    }
  end

  validates_presence_of :user_slug, :repo_slug, :average_rating, :total_reviews
  validates_numericality_of :average_rating, :greater_than_or_equal_to => 0, :less_than_or_equal_to => 5
end
