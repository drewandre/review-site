class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.belongs_to :repo, null: false
      t.belongs_to :user, null: false
      t.float :rating, null: false, default: nil
      t.text :body, null: false
      t.integer :upvotes, null: false, default: 0
      t.integer :downvotes, null: false, default: 0

      t.timestamps null: false
    end
  end
end
