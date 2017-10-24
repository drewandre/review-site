require "rails_helper"

RSpec.describe Api::V1::ReposController, type: :controller do
  let!(:gitquest) do
    Repo.create(
      user_slug: "zerovolts",
      repo_slug: "gitquest",
      average_rating: 3.2,
      fork: false,
    )
  end

  let!(:rust) do
    Repo.create(
      user_slug: "rust-lang",
      repo_slug: "rust",
      average_rating: 4.7,
      fork: true
    )
  end

  describe "GET#index" do
    it "should return a list of all repos" do
      get :index
      data = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(data[0]["user_slug"]).to eq("zerovolts")
      expect(data[0]["repo_slug"]).to eq("gitquest")
      expect(data[0]["average_rating"]).to eq 3.2

      expect(data[1]["user_slug"]).to eq("rust-lang")
      expect(data[1]["repo_slug"]).to eq("rust")
      expect(data[1]["average_rating"]).to eq 4.7
    end
  end

  describe "GET#user_repos_index" do
    it "should return a list of all repos for a user, including GitHub" do
      get :"user_repos_index", params: {user_slug: "zerovolts", repo_slug: "gitquest"}
      data = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(data["repos"][0]["user_slug"]).to eq("zerovolts")
      expect(data["repos"][0]["repo_slug"]).to eq("gitquest")
      expect(data["repos"][0]["average_rating"]).to eq 3.2

      expect(data).not_to have_content('"user_slug"=>"rust"')
    end
  end

  describe "GET#show" do
    it "should return a single repo, pulling from GitHub if it doesn't exist" do
      get :show, params: {user_slug: "zerovolts", repo_slug: "gitquest"}
      data = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(data["user_slug"]).to eq("zerovolts")
      expect(data["repo_slug"]).to eq("gitquest")
      expect(data["average_rating"]).to eq 3.2
    end
  end
end
