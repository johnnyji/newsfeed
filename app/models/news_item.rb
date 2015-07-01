class NewsItem < ActiveRecord::Base
  belongs_to :user
  has_many :comments, as: :commentable, dependent: :destroy
  has_many :stars, dependent: :destroy
  has_many :upvotes, dependent: :destroy

  # scope :query_by_city,
  #   lambda { |city| where(city: nil) }.call
end
