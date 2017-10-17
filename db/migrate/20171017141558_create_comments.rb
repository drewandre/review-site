class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.belongs_to :user, null: false
      t.belongs_to :review, null: false
      t.text :body, null: false

      t.timestamps null: false
    end
  end
end
