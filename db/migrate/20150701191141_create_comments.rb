class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :body
      t.references :user, index: true
      t.references :news_item, index: true
      t.timestamps null: false
    end
  end
end
