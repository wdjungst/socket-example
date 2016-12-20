Rails.application.routes.draw do
  root 'home#index'
  devise_for :users, controllers: { 
    registrations: 'api/registrations', 
    sessions: 'api/sessions' 
  }

  namespace :api do
    get 'users/info'
    get 'online_users', to: 'users#online_users'
  end

  get '*unmatched_route', to: 'home#index'
end
