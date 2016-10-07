class BoardsController < ApplicationController
  before_action :authenticate_user!

  def index
    @boards = Board.where(user_id: current_user.id)
    respond_to do |format|
      format.json { render json: @boards.to_json( include: :lists) }
    end
  end

  def create
    @board = Board.create({title: params[:title], user_id: current_user.id})
    @board.lists.create({description: params[:listDescription], title: params[:listTitle]})
    respond_to do |format|
      format.json { render json: @board.to_json( include: :lists) }
    end
  end

  def show
    @board = Board.find(params[:id])
  end
end
