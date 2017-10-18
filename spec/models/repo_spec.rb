require 'rails_helper'

RSpec.describe Repo, type: :model do
  it { should have_valid(:github_repo_url).when("www.github.com") }
  it { should_not have_valid(:github_repo_url).when(nil, '') }

  it { should have_valid(:average_rating).when(0, 2, 5) }
  it { should_not have_valid(:average_rating).when(nil, '', -1, 5.3) }

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

end
