class UpvotesController < ApplicationController
  before_action :require_user

  def create #params: news_item_id
    current_user.upvotes.create!(news_item_id: params[:news_item_id])
    render json: nil, status: 201
    rescue_record_invalid
  end

  def destroy #params: news_item_id
    upvote = current_user.upvotes.find_by(news_item_id: params[:news_item_id])
    upvote.destroy
    render json: nil, status: 204
  end

end
