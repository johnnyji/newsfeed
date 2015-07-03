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

  def create
  end

  def destroy
  end

  def search
    @news_items = NewsItem.query_by_city(params[:city])
  end

end
