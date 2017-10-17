class CreateExamples < ActiveRecord::Migration[5.1]
  def change
    create_table :examples do |t|
      t.belongs_to :repo, null: false
      t.belongs_to :user, null: false
      t.string :url, null: false

      t.timestamps null: false
    end
  end
end
