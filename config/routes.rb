R20130306Travlr::Application.routes.draw do
 root :to => 'trips#index'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  resources :users, :only => [:index, :new, :create]

  # This is the trips routes
  resources :trips


end
