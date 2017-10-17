class RepoTag < ApplicationRecord
  belongs_to :repo
  belongs_to :tag

  validates_presence_of :repo, :tag
end
