class StaticPagesController < ApplicationController
  before_action :authenticate_user!
  def index
    @board = Board.first
    
  end
end
