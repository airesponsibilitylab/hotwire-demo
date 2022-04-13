Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  resources :posts do
    # resource :votes
  end

  # Defines the root path route ("/")
  root "static_pages#home"
end
