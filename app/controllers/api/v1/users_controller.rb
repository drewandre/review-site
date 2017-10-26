class Api::V1::UsersController < ApplicationController
  #protect_from_forgery unless: -> { request.format.json? }

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find_by(login: params[:login])
    render json: @user
  end

  def user
    render json: current_user
  end
end
