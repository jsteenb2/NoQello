class CardsController < ApplicationController
  before_action :authenticate_user!

  def create
    @card = Card.create(card_params)
    if (params[:activity])
      @card.activities.create!(activity_params)
    end
    respond_to do |format|
      format.json { render json: @card.to_json( include: :activities ) }
    end
  end

  def show
    @card = Card.find(params[:id])
    respond_to do |format|
      format.json { render json: @card }
    end
  end

  def update
    @card = Card.find(params[:id])
    @card.update(card_params)
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy
  end

  private

    def card_params
      params.require(:card).permit(:description, :list_id, :title, :due_date, :completed, { :activities_attributes => [ :description, :completed ] })
    end

    def activity_params
      params.require(:activity).permit(:description, :completed)
    end
end
