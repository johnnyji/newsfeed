json.user do
  json.id current_user.id
  json.name current_user.name
  json.profile_thumbnail current_user.profile_thumbnail
  json.profile_picture current_user.profile_picture
  json.news_items current_user.news_items.order(created_at: :desc) do |news_item|
    json.partial! "news_items/news_item.json.jbuilder", news_item: news_item
  end
end
