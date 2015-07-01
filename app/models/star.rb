class Star < ActiveRecord::Base
  belongs_to :news_item
  belongs_to :user
end
