class CreateReplies < ActiveRecord::Migration
  def change
    create_table :replies do |t|
      t.string :body
      t.references :user, index: true
      t.references :comment, index: true
      t.timestamps null: false
    end
  end
end
