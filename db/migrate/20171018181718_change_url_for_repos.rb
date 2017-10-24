class ChangeUrlForRepos < ActiveRecord::Migration[5.1]
  def change
    change_table :repos do |t|
      t.string :user_slug
      t.string :repo_slug
    end

    add_index :repos, [:user_slug, :repo_slug], unique: true
  end
end
