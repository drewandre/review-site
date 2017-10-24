class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.belongs_to :user, null: false
      t.belongs_to :review, null: false
      t.boolean :upvoted, default: nil

      t.timestamps null: false
    end
  end
end
