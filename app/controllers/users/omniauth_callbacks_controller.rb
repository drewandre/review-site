class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  protect_from_forgery unless: -> { request.format.json? }
  
  def github
    @user = User.from_omniauth(request.env["omniauth.auth"])

    if @user.persisted?
      sign_in_and_redirect @user, :event => :authentication
    else
      session["devise.github_data"] = request.env["omniauth.auth"]
      redirect_to root_path
    end
  end

  def failure
    redirect_to root_path
  end
end
