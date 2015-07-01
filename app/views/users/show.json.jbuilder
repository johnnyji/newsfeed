json.user do
  json.id             current_user.id
  json.first_name     current_user.first_name
  json.last_name      current_user.id
  json.city           current_user.city
end
