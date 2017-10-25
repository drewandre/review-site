require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:user1) { User.create(login: "zerovolts") }
  let!(:user2) { User.create(login: "drewandre") }

  let!(:gitquest) do
    Repo.create(
      user_slug: "zerovolts",
      repo_slug: "gitquest",
      average_rating: 3.2,
      fork: false
    )
  end

  let!(:review1) do
    Review.create(
      user: User.first,
      repo: Repo.first,
      rating: 4.7,
      body: "It's pretty cool."
    )
  end

  let!(:review2) do
    Review.create(
      user: User.second,
      repo: Repo.first,
      rating: 1.3,
      body: "It aight."
    )
  end

  describe "GET#index" do
    it "should return a list of all reviews for a repo" do
      get :index, params: {user_slug: "zerovolts", repo_slug: "gitquest"}
      data = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(data).to have_content "It's pretty cool."
      expect(data).to have_content "It aight."
    end
  end
end
