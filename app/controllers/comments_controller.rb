class CommentsController < ApplicationController
  before_action :require_user, only: %i(create update destroy)
  before_action :find_comment, only: %i(update destroy)

  def index #params: news_item_id
    news_item = NewsItem.find(params[:news_item_id])
    @comments = news_item.comments.order(created_at: :desc)
    render "index.json.jbuilder"
  end

  def create #params: comment_params
    @comment = current_user.comments.create!(comment_params)
    render "create.json.jbuilder"
    rescue_record_invalid
  end

  def update #params: id, comment_params
    @comment.update!(comment_params)
    render json: nil, status: 201
    rescue_record_invalid
  end

  def destroy #params: id
    @comment.destroy
    render json: nil, status: 204
  end

  private

  def find_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:body, :news_item_id)
  end

end
