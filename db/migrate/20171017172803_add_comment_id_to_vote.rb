class AddCommentIdToVote < ActiveRecord::Migration[5.1]
  def change
    add_reference :votes, :comment, foreign_key: true, null: false
  end
end
