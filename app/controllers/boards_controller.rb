class BoardsController < ApplicationController
  before_action :authenticate_user!

  def index
    @boards = Board.where(user_id: current_user.id).order(updated_at: :desc)
    respond_to do |format|
      format.json { render json: @boards.to_json( include: :lists) }
    end
  end

  def create
    @board = Board.new(board_params)
    @board.user_id = current_user.id
    @board.save
    respond_to do |format|
      format.json { render json: @board }
    end
  end

  def show
    @board = Board.find(params[:id])
  end

  def update
    @board = Board.find(params[:id])
    @board.update(board_params)
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy
  end

  private

    def board_params
      params.require(:board).permit(:title, :description)
    end
end
