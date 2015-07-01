class CreateStars < ActiveRecord::Migration
  def change
    create_table :stars do |t|
      t.references :news_item, index: true
      t.references :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :stars, :news_items
    add_foreign_key :stars, :users
  end
end
