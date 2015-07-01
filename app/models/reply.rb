class Reply < ActiveRecord::Base
  belongs_to :replyable, polymorphic: true
  belongs_to :user
end
