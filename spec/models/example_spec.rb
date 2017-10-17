require 'rails_helper'

RSpec.describe Example, type: :model do
  it { should have_valid(:url).when("www.github.com") }
  it { should_not have_valid(:url).when(nil, '') }

  it 'should belong to user' do
    expect(Example.new).to belong_to :user
  end

  it 'should belong to repo' do
    expect(Example.new).to belong_to :repo
  end
end
