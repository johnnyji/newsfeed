class NewsItem < ActiveRecord::Base
  belongs_to :user
  has_many :comments, as: :commentable, dependent: :destroy
  has_many :stars, dependent: :destroy
  has_many :upvotes, dependent: :destroy

  validates :title, presence: { message: "Title cannot be blank!" },
                    uniqueness: { message: "This title is already taken" }
  validates :description, presence: { message: "Description cannot be blank!" }
end
