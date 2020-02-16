Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  resources :resource_cards
  resources :supporters
  get 'auth/linkedin/callback' => 'auth#gettoken'
  get 'auth/linkedin/url' => 'auth#getredirect'
end
