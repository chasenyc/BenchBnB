class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, :seating, :image_url, presence: true

  has_many :reviews,
    class_name: 'Review',
    foreign_key: :bench_id,
    primary_key: :id

  def self.in_bounds(bounds,filter_min,filter_max)
    bounds = JSON.parse(bounds)
    top_right = bounds['northEast']
    bottom_left = bounds['southWest']
    Bench.where("lat > #{bottom_left['lat']} AND lat < #{top_right['lat']}").   where("lng > #{bottom_left['lng']} AND lng < #{top_right['lng']}").
    where({seating: (filter_min..filter_max)})
  end

end
