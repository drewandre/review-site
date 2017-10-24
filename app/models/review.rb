class Review < ApplicationRecord
  belongs_to :user
  belongs_to :repo
  has_many :comments
  has_many :votes

  validates_presence_of :repo, :user, :rating, :body, :upvotes, :downvotes
  validates_numericality_of :upvotes, :only_integer => true, :greater_than_or_equal_to => 0
  validates_numericality_of :downvotes, :only_integer => true, :greater_than_or_equal_to => 0

  def upvote(user)
    Vote.create_vote(user, self, true)
  end

  def downvote(user)
    Vote.create_vote(user, self, false)
  end

  def unvote(user)
    Vote.create_vote(user, self, nil)
  end

  def with_user_vote(user)
    vote = self.votes.find_by(user: user)&.upvoted
    self.as_json.merge(user_vote: vote)
  end
end
