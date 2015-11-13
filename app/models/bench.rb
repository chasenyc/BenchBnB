class Bench < ActiveRecord::Base

  def self.in_bounds(bounds)
    bounds = JSON.parse(bounds)
    top_right = bounds['northEast']
    bottom_left = bounds['southWest']
    results = []
    benches = Bench.all

    benches.each do |bench|
      if (bench.lat > bottom_left['lat'] && bench.lat < top_right['lat'] &&
          bench.lng > bottom_left['lng'] && bench.lng < top_right['lng']) then
        results.push(bench)
      end

    end

    return results
  end

end
