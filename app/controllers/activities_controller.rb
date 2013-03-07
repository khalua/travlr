class ActivitiesController < ApplicationController
  def show
    activity = Activity.find(params[:id])
    render :json => activity
  end

end