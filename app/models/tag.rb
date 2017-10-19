class Tag < ApplicationRecord
  include ActiveModel::Serializers::JSON
  
  has_many :repo_tags

  def attributes
    {
      "id": @id,
      "name": @name
    }
  end

  validates_presence_of :name
end
