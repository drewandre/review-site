class Review < ApplicationRecord
  belongs_to :user
  belongs_to :repo
  has_many :comments

  validates_presence_of :repo, :user, :rating, :body, :upvotes, :downvotes
  validates_numericality_of :upvotes, :only_integer => true, :greater_than_or_equal_to => 0
  validates_numericality_of :downvotes, :only_integer => true, :greater_than_or_equal_to => 0
end
