class BoardsController < ApplicationController
  def index
    @boards = Board.all
    respond_to do |format|
      format.json { render json: @boards }
    end
  end

  def show
    @board = Board.find(params[:id])
    @lists = @board.lists.includes(:cards)
    respond_to do |format|
      format.json { render :show }
    end
  end
end
