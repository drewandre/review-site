require 'rails_helper'

RSpec.describe RepoTag, type: :model do
  it 'should belong to repo' do
    expect(RepoTag.new).to belong_to :repo
  end

  it 'should belong to tag' do
    expect(RepoTag.new).to belong_to :tag
  end
end
