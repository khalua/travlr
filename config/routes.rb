R20130306Travlr::Application.routes.draw do
 root :to => 'welcome#index'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  resources :users, :only => [:index, :new, :create]

  # This is the trips routes
  resources :trips
  resources :activities, :only => [:show, :create]

  #delete this at end
  get "/tc" => 'welcome#tc'
  post "/welcome" => 'welcome#geo'

end
