Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  root 'static_pages#index'

  namespace "api" do
    namespace "v1" do
      resources :users, param: :login, only: [:index, :show]
      resources :repos, only: [:index]

      # all repos for one user (from GitHub)
      get "users/:user_slug/repos", to: "repos#user_repos_index"

      # one specific repo for a user
      get "users/:user_slug/repos/:repo_slug", to: "repos#show"

      # all tags
      get "tags", to: "tags#index"

      # all repos for one tag
      get "tags/:tag_slug", to: "tags#show"

      # all reviews for one repo
      get "/users/:user_slug/repos/:repo_slug/reviews", to: "reviews#index"

      # all tags for one repo
      #get ":user_slug/:repo_slug/tags", to: ""

      # all comments for one review
      #get ":user_slug/:repo_slug/reviews/:id/comments", to: ""
    end
  end
end
