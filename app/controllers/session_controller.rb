class SessionController < ApplicationController
  before_action :require_user, only: %i(destroy)

  def create
    @user = User.find_or_create_from_auth_hash(auth_hash)
    session[:user_id] = @user.id
    redirect_to root_path
  end

  def show
    render "show.json.jbuilder"
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "Logged out"
  end

  private

  def auth_hash
    request.env["omniauth.auth"]
  end

end
