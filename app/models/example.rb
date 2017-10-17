class Example < ApplicationRecord
  belongs_to :repo
  belongs_to :user

  validates_presence_of :repo, :url
end
