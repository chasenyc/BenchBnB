class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :bench_id, null: false
      t.integer :rating, null: false
      t.text :body

      t.timestamps null: false
    end
    add_index :reviews, :bench_id
  end
end
