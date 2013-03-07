class TripsController < ApplicationController

  def index
    @trips = @auth.trips
  end

  def create
    #binding.pry
    trip = Trip.create(params[:trip])
    @auth.trips << trip
    @auth.save
    render :json => trip
  end

  def update
    trip = Trip.find(params[:id])
    trip.update_attributes(params[:task])
    render :json => trip
  end

  def destroy
    trip = Task.find(params[:id])
    trip.delete
    render :json => trip
  end

  def show
    trip = Trip.find(params[:id])
    render :json => trip
  end
end