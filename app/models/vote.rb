class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :review

  validates_presence_of :user, :review

  def self.create_vote(user, review, state)
    vote = Vote.find_by(review: review, user: user)

    if vote
      vote.upvoted = state
    else
      vote = Vote.new(review: review, user: user, upvoted: state)
    end
    vote.save

    review.upvotes = review.votes.where(upvoted: true).length
    review.downvotes = review.votes.where(upvoted: false).length
    review.save

    vote
  end
end
