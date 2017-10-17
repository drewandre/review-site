require 'rails_helper'

RSpec.describe Tag, type: :model do
  it { should have_valid(:name).when("tag") }
  it { should_not have_valid(:name).when(nil, '') }

  it 'should have many repo tags' do
    expect(Tag.new).to have_many :repo_tags
  end

end
