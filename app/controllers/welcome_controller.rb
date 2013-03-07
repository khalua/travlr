class WelcomeController < ApplicationController
  def index
  end

  def tc
  end

  def geo
    location = Geocoder.search(params[:location]).first
    lat_long = []
    lat_long << location.latitude << location.longitude << location.city
    render :json => lat_long
  end
end