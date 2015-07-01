class UsersController < ApplicationController
  before_action :require_user, only: %i(show)

  def create #params: account_params, user_params
    @user = User.new
    @user.create_with_account(user_params, account_params)
    session[:user_id] = @user.id
    render json: { user_id: @user.id }, status: 201
  rescue ActiveRecord::RecordInvalid => e
    binding.pry
    render json: { message: e.record.errors.values.first.flatten.to_s }, status: 422
  end

  def show
    render "show.json.jbuilder"
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :city)
  end

  def account_params
    params.require(:account).permit(:email, :password, :password_confirmation)
  end

end
