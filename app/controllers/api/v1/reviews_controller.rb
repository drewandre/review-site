class Api::V1::ReviewsController < ApplicationController
  def index
    user_slug = params[:user_slug]
    repo_slug = params[:repo_slug]

    @repo = Repo.find_by(
      user_slug: user_slug,
      repo_slug: repo_slug
    )

    if @repo
      @reviews = @repo.reviews.map do |review|
        {user: review.user.as_json}.merge(review.as_json)
      end
    else
      @reviews = []
    end

    render json: @reviews
  end
end
