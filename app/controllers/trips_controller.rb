class TripsController < ApplicationController

  def index
    @trips =  @auth.trips
  end

  def show
    trip = Trip.find(params[:id])
    render :json => trip
  end

end