class CreateRepos < ActiveRecord::Migration[5.1]
  def change
    create_table :repos do |t|
      t.float :average_rating
      t.integer :total_reviews, null: false, default: 0
      t.text :description, default: ""
      t.string :language
      t.integer :size
      t.string :homepage
      t.boolean :fork, null: false
      t.date :last_update
      t.integer :forks_count
      t.integer :open_issues_count
      t.integer :subscribers_count

      t.timestamps null: false
    end
  end
end
