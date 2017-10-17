class Repo < ApplicationRecord
  has_many :reviews
  has_many :alternative_repos
  has_many :repo_tags
  has_many :examples

  validates_presence_of :github_repo_url, :average_rating, :total_reviews
  validates_numericality_of :average_rating :greater_than_or_equal_to => 0, :less_than_or_equal_to => 5
end
