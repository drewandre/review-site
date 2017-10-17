require 'rails_helper'

RSpec.describe Comment, type: :model do
  it { should have_valid(:body).when("body") }
  it { should_not have_valid(:body).when(nil, '') }

  it 'should belong to review' do
    expect(Comment.new).to belong_to :review
  end

  it 'should belong to user' do
    expect(Comment.new).to belong_to :user
  end

  it 'should have many votes' do
    expect(Comment.new).to have_many :votes
  end

end
