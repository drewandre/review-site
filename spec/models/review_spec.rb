require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should have_valid(:body).when("body") }
  it { should_not have_valid(:body).when(nil, '') }

  it 'should belong to user' do
    expect(Review.new).to belong_to :user
  end

  it 'should belong to repo' do
    expect(Review.new).to belong_to :repo
  end

  it 'should have many comments' do
    expect(Review.new).to have_many :comments
  end

end
