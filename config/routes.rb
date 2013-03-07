R20130306Travlr::Application.routes.draw do
 root :to => 'welcome#index'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  resources :users, :only => [:index, :new, :create]

  # This is the trips routes
  resources :trips, :only => [:show, :create, :index]
  resources :activities, :only => [:show, :create, :update, :destroy] do
    member do
      post :up
      post :down
    end
  end


end
