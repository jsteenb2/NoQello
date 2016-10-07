class CardsController < ApplicationController
  before_action :authenticate_user!

  def show
    @card = Card.find(params[:id])
  end

  def update
    @card = Card.find(params[:id])
    @card.update(card_params)
  end

  private

    def card_params
      params.require(:card).permit(:description)
    end
end
