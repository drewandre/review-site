class User < ApplicationRecord
  has_many :reviews
  has_many :examples
  has_many :comments, through: :reviews
  has_many :votes, through: :reviews, source: :comments

  validates_presence_of :email

end
