class BoardsController < ApplicationController
  def index
    @boards = Board.all
    respond_to do |format|
      format.json { render json: @boards.to_json( include: :lists ) }
    end
  end
end
