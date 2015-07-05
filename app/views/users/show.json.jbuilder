json.user do
  json.id @user.id
  json.name @user.name
  json.profile_thumbnail @user.profile_thumbnail
  json.profile_picture @user.profile_picture
  json.news_items @user.news_items.order(created_at: :desc) do |news_item|
    json.partial! "news_items/news_item.json.jbuilder", news_item: news_item
  end
end
