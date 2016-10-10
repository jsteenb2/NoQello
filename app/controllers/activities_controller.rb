class ActivitiesController < ApplicationController
  def create
      @activity = Activity.create(activity_params)
      respond_to do |format|
        format.json { render json: @activity }
      end
  end

  def update
    @activity = Activity.find(params[:id])
    @activity.update(activity_params)
  end

  def destroy
    @activity = Activity.find(params[:id])
    @activity.destroy
  end

  private

    def activity_params
      params.require(:activity).permit(:description, :completed, :card_id)
    end
end
