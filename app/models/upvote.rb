class Upvote < ActiveRecord::Base
  belongs_to :user
  belongs_to :news_item

  validates :user, uniqueness: { scope: :news_item, message: "You've already upvoted this post!" }
end
