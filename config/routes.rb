Rails.application.routes.draw do
  devise_for :users

  root to: "static_pages#index"

  scope :api do
    scope :v1 do
      resources :boards
      resources :lists
      resources :cards
      resources :activities
    end
  end
end
