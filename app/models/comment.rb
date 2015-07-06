class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :news_item
  has_many :replies
end
