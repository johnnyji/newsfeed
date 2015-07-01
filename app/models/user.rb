class User < ActiveRecord::Base
  has_one :account, as: :accountable, dependent: :destroy
  has_many :news_items, dependent: :destroy
  has_many :comments, through: :news_items
  has_many :replies, through: :comments

  def self.construct(user_params, account_params) #creates the user along with the account
    user = User.new
    account = user.account.build(user_params)
    account.save!

    user
  end
end
