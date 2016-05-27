class RemoveWeightColumnFromProducts < ActiveRecord::Migration[5.0]
  def up
    remove_column :products, :weight
  end

  def down
    add_column :products, :weight
  end
end
