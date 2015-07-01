class NewsItemsController < ApplicationController
  before_action :require_user, only: %i(create destroy)

  def index
    @news_items = NewsItem.all.order(created_at: :desc)
    render "index.json.jbuilder"
  end

  def show
    @news_item = NewsItem.find(params[:id])
    render "show.json.jbuilder"
  end

  def create
  end

  def destroy
  end
end
