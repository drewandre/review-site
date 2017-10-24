class Api::V1::CommentsController < ApplicationController
  def index
    review = Review.find(params[:review_id])
    render json: review.comments
  end

  def create
    comment = Comment.new(comment_params)
    review = Review.find(params[:review_id])

    comment.review = review
    comment.user = current_user

    if comment.save
      render json: {message: "Comment saved successfully!"}
    else
      render json: {message: "Comment could not be saved."}
    end
  end

  def comment_params
    params.permit(:body)
  end
end
