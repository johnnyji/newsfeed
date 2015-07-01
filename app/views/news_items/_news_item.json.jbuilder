json.id           news_item.id
json.title        news_item.title
json.description  news_item.description
json.link         news_item.link
json.created_at   format_date(news_item.created_at)
json.timestamp    format_timestamp(news_item.created_at)
json.upvotes      news_item.upvotes.count
json.user         news_item.user, :id, :first_name, :last_name

json.comments news_item.comments.order(created_at: :desc) do |comment|
  json.body       comment.body
  json.created_at format_date(comment.created_at)

  json.replies comment.replies.order(created_at: :desc) do |reply|
    json.body       reply.body
    json.created_at format_date(reply.created_at)
    json.user       reply.user, :id, :first_name, :last_name
  end

end
