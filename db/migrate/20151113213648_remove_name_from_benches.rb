class RemoveNameFromBenches < ActiveRecord::Migration
  def change
    remove_column :benches, :name
  end
end
