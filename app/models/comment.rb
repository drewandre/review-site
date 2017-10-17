class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :review
  has_many :votes
  
  validates_presence_of :user, :review, :body
end
