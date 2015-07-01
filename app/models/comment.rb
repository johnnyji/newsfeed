class Comment < ActiveRecord::Base
  belongs_to :commentable, polymorphic: true
  has_many :replies, as: :replyable, dependent: :destroy
end
