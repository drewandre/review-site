class Tag < ApplicationRecord
  has_many :repo_tags

  validates_presence_of :name
end
