Rails.application.routes.draw do

  root 'home#index'

  controller :session do
    get "/auth/twitter/callback" => :create
    delete "/logout" => :destroy
  end

  controller :users do
    get "/current_user" => :show
    delete "/delete_user" => :destroy
  end

  controller :news_items do
    get "/news_items" => :index
    post "/new_news_item" => :create
    post "/filter_city" => :search
  end

end
