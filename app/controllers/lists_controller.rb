class ListsController < ApplicationController
  def show
    @list = List.find(params[:id])
    p @list
    respond_to do |format|
      format.json { render json: @list.to_json( include: :cards) }
    end
  end
end
