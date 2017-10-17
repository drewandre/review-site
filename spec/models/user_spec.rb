require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_valid(:email).when("email@test.com") }
  it { should_not have_valid(:email).when(nil) }

  it 'should have many reviews' do
    expect(User.new).to have_many :reviews
  end

  it 'should have many examples' do
    expect(User.new).to have_many :examples
  end

  it 'should have many comments' do
    expect(User.new).to have_many :comments
  end

  it 'should have many votes' do
    expect(User.new).to have_many :votes
  end

end
