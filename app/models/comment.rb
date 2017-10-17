class Comment < ApplicationRecord
  belongs_to :user

  validates_presence_of :user, :review: :do
end
