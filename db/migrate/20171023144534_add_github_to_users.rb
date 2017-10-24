class AddGithubToUsers < ActiveRecord::Migration[5.1]
  def change
    change_table :users do |t|
      t.string :name
      t.text :bio
      t.string :location
      t.string :blog
      t.string :avatar_url
      t.integer :public_repos
      t.integer :followers
      t.integer :following

      t.string :github_url
      t.string :reporev_url
    end
  end
end
