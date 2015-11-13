class Bench < ActiveRecord::Base

  def self.in_bounds(bounds)
    bounds = JSON.parse(bounds)
    top_right = bounds['northEast']
    bottom_left = bounds['southWest']
    Bench.where("lat > #{bottom_left['lat']} AND lat < #{top_right['lat']}").   where("lng > #{bottom_left['lng']} AND lng < #{top_right['lng']}")
  end

end
