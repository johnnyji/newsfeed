# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create!(first_name: "Johnny", last_name: "Ji")
user2 = User.create!(first_name: "Hanson", last_name: "Zhang")
user3 = User.create!(first_name: "Jeremy", last_name: "Shazi")
user_id = [user1.id, user2.id, user3.id].sample

(1..100).each do |num|
  item = NewsItem.create!(title: "title#{num}", link: "link#{num}", description: "This is just some random description about the news item blah blah", user_id: user_id)
  rand(100).times do
    item.upvotes.create!
  end
  rand(20).times do
    comment = item.comments.create!(body: "this is comment", user_id: user_id)
    comment.replies.create!(body: "this is reply", user_id: user_id)
  end
end
