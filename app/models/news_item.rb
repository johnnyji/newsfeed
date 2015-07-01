class NewsItem < ActiveRecord::Base
  belongs_to :user

  # scope :query_by_city, 
  #   lambda { |city| where(city: nil) }.call
end
