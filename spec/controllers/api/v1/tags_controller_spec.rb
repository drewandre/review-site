require "rails_helper"

RSpec.describe Api::V1::TagsController, type: :controller do
  let!(:interpreter) { Tag.create(name: "interpreter") }
  let!(:http) { Tag.create(name: "http") }

  let!(:gitquest) do
    Repo.create(
      user_slug: "zerovolts",
      repo_slug: "gitquest",
      average_rating: 3.2,
      tags: [Tag.first],
      fork: false
    )
  end

  describe "GET#index" do
    it "should return a list of all tags" do
      get :index
      data = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(data).to have_content "interpreter"
      expect(data).to have_content "http"
    end
  end

  describe "GET#show" do
    it "should return a list of repositories with a given tag" do
      get :show, params: {tag_slug: "interpreter"}
      data = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(data).to have_content "interpreter"
      expect(data).not_to have_content '"name"=>"http"'
      expect(data).to have_content "gitquest"
    end
  end
end
