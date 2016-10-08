class ListsController < ApplicationController
  def create
    @list = List.create(list_params)
    respond_to do |format|
      format.json { render json: @list.to_json( include: :cards) }
    end
  end

  def show
    @list = List.find(params[:id])
    respond_to do |format|
      format.json { render json: @list.to_json( include: :cards) }
    end
  end

  def update
    @list = List.find(params[:id])
    @list.update(list_params)
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
  end

  private

    def list_params
      params.require(:list).permit(:title, :description, :board_id)
    end
end
