class User < ActiveRecord::Base
  has_one :account, as: :accountable, dependent: :destroy

  def construct() #creates the user along with the account
  end
end
