json.id                       news_item.id
json.title                    news_item.title
json.description              news_item.description
json.link                     news_item.link
json.created_at               format_date(news_item.created_at)
json.timestamp                format_timestamp(news_item.created_at)
json.upvotes                  news_item.upvotes.count
json.user                     news_item.user, :id, :name, :profile_thumbnail

if current_user.present?
  json.upvoted_by_current_user  news_item.upvoted_by_user?(current_user.id)
else
  json.upvoted_by_current_user  false
end

json.comment_count            news_item.comments.count
