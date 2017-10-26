require "rails_helper"

RSpec.describe Api::V1::CommentsController, type: :controller do
  let!(:user1) { User.create(login: "zerovolts") }
  let!(:user2) { User.create(login: "drewandre") }

  let!(:gitquest) do
    Repo.create(
      user_slug: "zerovolts",
      repo_slug: "gitquest",
      average_rating: 3.2,
      fork: false,
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

  let!(:comment) do
    Comment.create(
      user: User.first,
      review: Review.first,
      body: "I agree with this"
    )
  end

  describe "GET#index" do
    it "should return a list of all comments for a review" do
      allow(request.env['warden']).to receive(:authenticate!).and_return(user1)
      allow(controller).to receive(:current_user).and_return(user1)
      get :index, params: {review_id: Review.first.id}
      data = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(data).to have_content "I agree with this"
    end
  end
end
