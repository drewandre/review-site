class Api::V1::UsersController < ApplicationController
  #protect_from_forgery unless: -> { request.format.json? }

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find_by(login: params[:login])

    if !@user
      url = "https://#{ENV["GITHUB_ACCESS_TOKEN"]}@api.github.com/users/#{params[:login]}"
      @user = JSON.parse(RestClient.get(url))
    end

    render json: @user
  end

  def user
    render json: current_user
  end
end
