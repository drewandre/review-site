class Api::V1::TagsController < ApplicationController
  def index
    @tags = Tag.all
    render json: (@tags.map do |tag|
      {
        id: tag.id,
        name: tag.name,
        tag_url: "http://localhost:3000/api/v1/tags/#{tag.name}",
        count: Repo.all.select { |repo| repo.tags.include? tag }.length
      }
    end)
  end

  def show
    @tag = Tag.find_by(name: params[:tag_slug])
    @repos = Repo.all.select { |repo| repo.tags.include? @tag }

    render json: {
      tag: @tag,
      repos: @repos
    }
  end
end
