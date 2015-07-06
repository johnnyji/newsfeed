class NewsItem < ActiveRecord::Base
  enum status: { active: 0, archived: 1 }
  belongs_to :user

  has_many :comments, dependent: :destroy
  has_many :upvotes, dependent: :destroy

  validates :title, presence: { message: "Title cannot be blank!" },
                    uniqueness: { message: "This title is already taken" }
  validates :description, presence: { message: "Description cannot be blank!" }

  def self.archive_old_iteration
    old_items = NewsItem.where { created_at < 7.days.ago }
    old_items.each { |i| i.archived! }
  end

  def upvoted_by_user?(user_id)
    self.upvotes.pluck(:user_id).include?(user_id)
  end

end
