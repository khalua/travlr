class TripsController < ApplicationController

  def index
    # @trips =  @auth.trips
    t1 = Trip.create(:name => 'Trip 1', :startdate => '2012-03-01', :enddate => '2012-03-10')
    t2 = Trip.create(:name => 'Trip 1', :startdate => '2012-03-11', :enddate => '2012-03-20')
    t3 = Trip.create(:name => 'Trip 1', :startdate => '2012-03-21', :enddate => '2012-03-30')
    @trips = [t1, t2, t3]
  end

  def show
    trip = Trip.find(params[:id])
    render :json => trip
  end
end