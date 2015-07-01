if @news_item 
  json.partial! "news_item", news_item: @news_item
else
  json.message "Oop, seems that this news item doesn't exist"
end