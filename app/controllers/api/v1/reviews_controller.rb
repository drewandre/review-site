class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    user_slug = params[:user_slug]
    repo_slug = params[:repo_slug]

    @repo = Repo.find_by(
      user_slug: user_slug,
      repo_slug: repo_slug
    )

    @reviews = @repo&.reviews || []

    if current_user
      @reviews = @reviews.map { |review| review.with_user_vote(current_user) }
    end

    render json: @reviews
  end

  # possibly useless
  def show
    @review = Review.find(params[:id])
    if current_user
      @review.with_user_vote(current_user)
    end

    render json: @review
  end

  def create
    @review = Review.new(review_params)
    @review.user = current_user

    @repo = Repo.find_by(repo_params)
    if !@repo
      @repo = Repo.save_from_github(params[:user_slug], params[:repo_slug])
    end
    @review.repo = @repo
    @review.save

    @repo.recalculate_rating

    render json: @review
  end

  def repo_params
    params.permit(:user_slug, :repo_slug)
  end

  def review_params
    params.permit(:rating, :body)
  end
end
