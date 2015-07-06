if @comments.present?
  json.comments @comments do |comment|
    json.partial! "comment", comment: comment
  end
else
  json.message "No comments yet"
end
