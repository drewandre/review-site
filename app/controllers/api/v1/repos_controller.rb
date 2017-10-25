class Api::V1::ReposController < ApplicationController
  def index
    @repos = Repo.all
    render json: @repos
  end

  def user_repos_index
    user_slug = params[:user_slug]

    @reporev_repos = Repo.where(user_slug: user_slug).map do |repo|
      repo.as_json.merge from_github: false
    end
    @github_repos = Repo.all_from_github(user_slug, @reporev_repos)

    render json: {
      repos: @reporev_repos,
      github_repos: @github_repos
    }
  end

  def show
    user_slug = params[:user_slug]
    repo_slug = params[:repo_slug]

    @repo = Repo.find_by(user_slug: user_slug, repo_slug: repo_slug)

    if @repo
      @repo = @repo.as_json.merge from_github: false
    else
      @repo = Repo.from_github(user_slug, repo_slug)
    end

    render json: @repo
  end
end
