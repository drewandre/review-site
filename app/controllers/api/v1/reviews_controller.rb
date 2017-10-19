class Api::V1::ReviewsController < ApplicationController
  def index
    user_slug = params[:user_slug]
    repo_slug = params[:repo_slug]

    @repo = Repo.find_by(
      user_slug: user_slug,
      repo_slug: repo_slug
    )

    @reviews = @repo.reviews

    render json: @reviews
  end
end
