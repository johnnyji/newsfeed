class CreateNewsItems < ActiveRecord::Migration
  def change
    create_table :news_items do |t|
      t.integer :status, default: 0
      t.string :title
      t.string :link
      t.string :location
      t.text :description
      t.float :latitude
      t.float :longitude
      t.references :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :news_items, :users
  end
end
