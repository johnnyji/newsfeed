Rails.application.routes.draw do
  
  root 'home#index'

  resources :news_items, only: %i(index create)

  controller :session do
    post "/login" => :create
    delete "/logout" => :destroy
  end
  
  controller :users do
    post "/signup" => :create
    get "/current_user" => :show
    delete "/delete_user" => :destroy
  end

end
