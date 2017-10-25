class SearchController < ApplicationController
  def index
    #@github_api = RestClient.get('https://api.github.com/search/repositories?q=fastled&sort=stars&order=desc').body;
    # render json: @github_api
  end
end
