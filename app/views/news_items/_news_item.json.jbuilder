json.title        news_item.title
json.description  news_item.description
json.link         news_item.link
json.created_at   format_date(news_item.created_at)
json.timestamp    format_timestamp(news_item.created_at)
json.upvotes      news_item.upvotes.count

json.user do
  json.id         news_item.user.id
  json.first_name news_item.user.first_name
  json.last_name  news_item.user.last_name
end
