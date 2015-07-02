class UsersController < ApplicationController
  before_action :require_user, only: %i(show)

  def show
    render "show.json.jbuilder"
  end

end
