class NewsItemsController < ApplicationController
  before_action :require_user, only: %i(create destroy)

  def index
    offset = params[:offset] ? params[:offset] : 0

    @news_items = NewsItem.all.order(created_at: :desc).offset(offset).limit(10)
    render "index.json.jbuilder"
  end

  def show
    @news_item = NewsItem.find(params[:id])
    render "show.json.jbuilder"
  end

  def create #params: news_item
    @news_item = current_user.news_items.create!(news_item_params)
    render "create.json.jbuilder"
    rescue_record_invalid
  end

  def destroy
  end

  private

  def news_item_params
    params.require(:news_item).permit(:title, :link, :description, :location, :latitude, :longitude)
  end

end
