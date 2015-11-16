class Api::ReviewsController < ApplicationController

  def index

  end

  def create

  end

  private
  def review_params
    params.require(:review).permit(:rating, :body)
  end

end
