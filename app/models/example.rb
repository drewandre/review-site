class Example < ApplicationRecord
  validates_presence_of :repo, :example_url
end
