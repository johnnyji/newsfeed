class UsersController < ApplicationController

  def create #params: account_params, user_params
    @user = User.construct(user_params, account_params)
    binding.pry
    render "create.json.builder"
  rescue ActiveRecord::RecordInvalid => e
    binding.pry
    render json: { message: e.record.errors.values.first.flatten.to_s }, status: 422
  end

  private 

  def user_params
    params.require(:user).permit(:first_name, :last_name, :city)
  end

  def account_params
    params.require(:account).permit(:email, :password, :password_confirmation)
  end

end
