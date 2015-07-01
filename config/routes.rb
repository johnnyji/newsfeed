Rails.application.routes.draw do
  
  root 'home#index'

  controller :session do
    post "/login" => :create
    delete "/logout" => :destroy
  end
  
  controller :users do
    post "/signup" => :create
    get "/current_user" => :show
    delete "/delete_user" => :destroy
  end

  controller :news_items do
    get "/news_items" => :index
    post "/new_news_item" => :create
    post "/filter_city" => :search
  end

end
