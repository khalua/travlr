class TripsController < ApplicationController

  def index
    binding.pry
    @trips =  @auth.trips
  end

  def show
    binding.pry
    trip = Trip.find(params[:id])
  end

end