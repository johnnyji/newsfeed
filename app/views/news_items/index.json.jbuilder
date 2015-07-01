if @news_items.present?
  json.news_items @news_items do |news_item|
    json.partial! "news_item", news_item: news_item
  end
else
  json.message "No news items yet!"
end