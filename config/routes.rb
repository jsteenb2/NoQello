Rails.application.routes.draw do
  devise_for :users

  root to: "static_pages#index"

  scope :api do
    scope :v1 do
      resource :boards
      resource :lists
      resource :cards
    end
  end
end
