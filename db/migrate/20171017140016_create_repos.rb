class CreateRepos < ActiveRecord::Migration[5.1]
  def change
    create_table :repos do |t|
      t.string :github_repo_url, null: false
      t.float :average_rating, null: false, default: nil
      t.integer :total_reviews, null: false, default: 0
      t.string :example_url
      
      t.timestamps null: false
    end
  end
end
