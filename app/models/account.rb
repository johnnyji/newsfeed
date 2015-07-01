class Account < ActiveRecord::Base
  has_secure_password
  belongs_to :accountable, polymorphic: true

  validates :email, 
              presence: { message: "Please enter an email" }
  validates :password, 
              length: { minimum: 6, message: "Password needs to be > 6 chars." }
end
