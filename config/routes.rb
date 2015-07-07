Rails.application.routes.draw do

  root 'home#index'

  controller :session do
    get "/current_user" => :show
    get "/auth/twitter/callback" => :create
    delete "/logout" => :destroy
  end

  controller :users do
    post "/user" => :show
    delete "/delete_user" => :destroy
  end

  controller :upvotes do
    post "/upvote" => :create
    delete "/upvote" => :destroy
  end

  controller :news_items do
    get "/news_items" => :index
    post "/news_items" => :create
  end

  controller :comments do
    post "/comments" => :index
    post "/comment" => :create
    post "/update_comment" => :update
    delete "/comment" => :destroy
  end

end
