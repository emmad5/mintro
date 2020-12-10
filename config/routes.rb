Rails.application.routes.draw do
    root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :update] 
    resources :groups, only: [:create, :index, :update] do
      resources :users, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
  end
end
