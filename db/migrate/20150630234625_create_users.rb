class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :provider
      t.string :uid
      t.string :token
      t.string :secret
      t.string :profile_thumbnail
      t.string :profile_picture

      t.timestamps null: false
    end
  end
end
