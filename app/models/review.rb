class Review < ActiveRecord::Base

  validates :rating, presence: true

  belongs_to :bench,
    class_name: 'Bench',
    foreign_key: :bench_id,
    primary_key: :id
    
end
