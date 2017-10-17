class RepoTag < ApplicationRecord
  validates_presence_of :repo, :tag
end
