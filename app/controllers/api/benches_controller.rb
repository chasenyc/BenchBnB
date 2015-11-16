class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params['bounds'], params['min'], params['max'])
    render json: @benches.to_json
  end

  def create
    file = Cloudinary::Uploader.upload(params[:bench][:image_url])

    @bench = Bench.new(bench_params)
    @bench.image_url = file['url']
    if @bench.save
      render json: @bench.to_json
    else
      render json: @bench.errors.full_messages.to_json
    end
  end

  def show
    @bench = Bench.find(params[:id])
    render json: @bench
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :image_url, :seating)
  end
end
