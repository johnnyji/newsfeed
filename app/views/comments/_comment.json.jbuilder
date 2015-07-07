json.id         comment.id
json.body       comment.body
json.created_at format_date(comment.created_at)
json.user       comment.user, :id, :name, :profile_thumbnail

json.replies comment.replies.order(created_at: :desc) do |reply|
  json.body       reply.body
  json.created_at format_date(reply.created_at)
  json.user       reply.user, :id, :name, :profile_thumbnail
end
