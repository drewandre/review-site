require "rails_helper"

RSpec.describe Api::V1::UsersController, type: :controller do
  let!(:zerovolts) { User.create(login: "zerovolts") }
  let!(:drewandre) { User.create(login: "drewandre") }

  describe "GET#index" do
    it "should return a list of all users" do
      get :index
      data = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(data).to have_content "zerovolts"
      expect(data).to have_content "drewandre"
    end
  end

  describe "GET#show" do
    it "should return a single user" do
      get :show, params: {login: "zerovolts"}
      data = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(data).to have_content "zerovolts"
      expect(data).not_to have_content "drewandre"
    end
  end
end
