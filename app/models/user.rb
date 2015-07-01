class User < ActiveRecord::Base
  has_one :account, as: :accountable, dependent: :destroy
  has_many :news_items, dependent: :destroy
  has_many :comments, through: :news_items
  has_many :replies, through: :comments

  def create_with_account(user_params, account_params) #creates the user along with the account
    binding.pry
    self.save!(user_params)
    self.account.save!(account_params)
    self
  end
end
