require 'rails_helper'

RSpec.describe Repo, type: :model do
  let!(:user1) { User.create(login: "zerovolts") }
  let!(:user2) { User.create(login: "drewandre") }

  let!(:repo) do
    Repo.create(
      user_slug: "zerovolts",
      repo_slug: "gitquest",
      fork: false,
    )
  end

  it { should have_valid(:average_rating).when(0, 2.3, 5, nil) }
  it { should_not have_valid(:average_rating).when(-1, 5.3) }

  it 'should have many reviews' do
    expect(Repo.new).to have_many :reviews
  end

  it 'should have many repo_tags' do
    expect(Repo.new).to have_many :repo_tags
  end

  it 'should have many tags' do
    expect(Repo.new).to have_many :tags
  end

  it 'should have many examples' do
    expect(Repo.new).to have_many :examples
  end

  it "should recalculate the average rating" do
    expect(repo.average_rating).to eq(nil)

    Review.create(user: user2, repo: repo, body: "good", rating: 1.5)
    repo.recalculate_rating
    expect(repo.average_rating).to eq(1.5)

    Review.create(user: user1, repo: repo, body: "also good", rating: 3.5)
    repo.recalculate_rating
    expect(repo.average_rating).to eq(2.5)
  end
end
