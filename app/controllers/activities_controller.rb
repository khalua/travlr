class ActivitiesController < ApplicationController
  def show
    activity = Activity.find(params[:id])
    render :json => activity
  end

  def create
    binding.pry
    activity = Activity.create(params[:activity]);

    render :json => [activity]
  end

  def update
    activity = Activity.find(params[:id])
    activity.update_attributes(params[:activity])
    render :json => activity
  end
end