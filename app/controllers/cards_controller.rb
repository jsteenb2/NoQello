class CardsController < ApplicationController
  before_action :authenticate_user!

  def create
    @card = Card.create(card_params)
    respond_to do |format|
      format.json { render json: @card }
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
      params.require(:card).permit(:description, :list_id)
    end
end
