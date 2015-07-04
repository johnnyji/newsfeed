class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def require_user
    unless current_user
      render json: nil, status: 204
    end
  end

  def rescue_record_invalid
  rescue ActiveRecord::RecordInvalid => e
    render json: { errors: e.record.errors.messages }, status: 422
  end

end
