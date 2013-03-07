class ActivitiesController < ApplicationController
  def show
    activity = Activity.find(params[:id])
    render :json => activity
  end

  def create
  end

  def update
    activity = Activity.find(params[:id])
    activity.update_attributes(params[:activity])
    render :json => activity
  end

  def destroy
    activity = Activity.find(params[:id])
    activity.delete
    render :json => activity
  end

  def up
    activity = Activity.find(params[:id])
    activity.total_votes += 1
    activity.save
    render :json => activity
  end

  def down
    activity = Activity.find(params[:id])
    activity.total_votes -= 1
    activity.save
    render :json => activity
  end

end
