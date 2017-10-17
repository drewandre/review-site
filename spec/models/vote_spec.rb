require 'rails_helper'

RSpec.describe Vote, type: :model do
  it { should have_valid(:upvoted).when(nil) }

  it 'should belong to user' do
    expect(Vote.new).to belong_to :user
  end

  it 'should belong to comment' do
    expect(Vote.new).to belong_to :comment
  end

  it 'should belong to review' do
    expect(Vote.new).to belong_to :review
  end

end
