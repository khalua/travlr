class TripsController < ApplicationController
  def index
  end

def index
 @trips =  @auth.trips
end


end