class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.where(bench_id: params[:bench_id])
    render json: @reviews.to_json
  end

  def create
    @review = Review.new(review_params)
    @review.bench_id = params[:bench_id]
    if @review.save
      render json: @review.to_json
    else
      render json: @review.errors.full_messages.to_json
    end
  end

  private
  def review_params
    params.require(:review).permit(:rating, :body)
  end

end
