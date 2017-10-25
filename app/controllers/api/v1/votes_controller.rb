class Api::V1::VotesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index

  end

  def upvote
    review = Review.find(params[:id])
    review.upvote(current_user)

    render json: {status: "upvoted"}
  end

  def downvote
    review = Review.find(params[:id])
    review.downvote(current_user)

    render json: {status: "downvoted"}
  end

  def unvote
    review = Review.find(params[:id])
    review.unvote(current_user)

    render json: {status: "unvoted"}
  end
end
