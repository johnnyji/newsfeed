class CommentsController < ApplicationController
  before_action :require_user

  def index #params: news_item_id
    news_item = NewsItem.find(params[:news_item_id])
    @comments = news_item.comments.order(created_at: :desc)
    render "index.json.jbuilder"
  end

  def create #params: news_item_id
    @comment = current_user.comments.create!(comment_params)
    render "create.json.jbuilder"
    rescue_record_invalid
  end

  def destroy #params: id
    comment = Comment.find(params[:id])
    comment.destroy
    render json: nil, status: 204
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :news_item_id)
  end

end
