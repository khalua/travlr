class TripsController < ApplicationController

def index
 @trips =  @auth.trips
end


end