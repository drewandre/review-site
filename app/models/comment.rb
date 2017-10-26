class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :review

  validates_presence_of :user, :review, :body

  def as_json(options = {})
    super(methods: :user)
  end
end
