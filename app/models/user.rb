class User < ActiveRecord::Base
  has_one :account, as: :accountable, dependent: :destroy

  def self.construct(user_params, account_params) #creates the user along with the account
    user = User.new
    account = user.account.build(user_params)
    account.save!

    user
  end
end
