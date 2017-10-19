class ChangeUrlForRepos < ActiveRecord::Migration[5.1]
  def change
    add_column :repos, :user_slug, :string
    add_column :repos, :repo_slug, :string
    remove_column :repos, :github_repo_url
  end
end
