# Configuration for rails routes
Rails.application.routes.draw do
  root to: 'pages#home', as: :home
  get '*path', to: 'pages#home'
end
