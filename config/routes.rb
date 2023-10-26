# Configuration for rails routes
Rails.application.routes.draw do
  root to: 'pages#home', as: :home
  # get '*path', to: 'pages#home'
  get '/about', to: 'pages#home'
  get '/contact', to: 'pages#home'
  get '/skills', to: 'pages#home'
  get '/skills/:id', to: 'pages#home'
  get '/projects', to: 'pages#home'
  get '/projects/:id', to: 'pages#home'
  get '/projects/:projectTitle/:id', to: 'pages#home'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :skills, only: %i[index show]
      resources :projects, only: %i[index show]
    end
  end
end
