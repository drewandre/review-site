class CreateRepoTags < ActiveRecord::Migration[5.1]
  def change
    create_table :repo_tags do |t|
      t.belongs_to :repo, null: false
      t.belongs_to :tag, null: false

      t.timestamps null: false
    end
  end
end
