class User < ApplicationRecord
  has_many :examples
  has_many :reviews
  has_many :comments
  has_many :votes

end
