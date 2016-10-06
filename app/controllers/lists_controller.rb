class ListsController < ApplicationController
  def show
    @list = List.find(params[:id])
    respond_to do |format|
      format.json { render json: @list.to_json( include: :cards) }
    end
  end
end
