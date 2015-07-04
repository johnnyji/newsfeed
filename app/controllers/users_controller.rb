class UsersController < ApplicationController
  before_action :require_user, only: %i(show)

  def show #params: user_id
    @user = User.find(params[:user_id])
    render "show.json.jbuilder"
  rescue ActiveRecord::RecordNotFound
    render json: { message: "Sorry, that user couldn't be found!" }, status: 422
  end

end
