class CreateNewsItems < ActiveRecord::Migration
  def change
    create_table :news_items do |t|
      t.string :title
      t.string :link
      t.text :description
      t.references :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :news_items, :users
  end
end
