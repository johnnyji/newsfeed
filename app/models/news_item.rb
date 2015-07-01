class NewsItem < ActiveRecord::Base
  belongs_to :user
  has_many :stars
  has_many :upvotes

  # scope :query_by_city, 
  #   lambda { |city| where(city: nil) }.call
end
