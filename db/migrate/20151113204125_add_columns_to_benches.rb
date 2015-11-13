class AddColumnsToBenches < ActiveRecord::Migration
  def change
    add_column :benches, :image_url, :string
    add_column :benches, :name, :string
  end
end
