class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :sku, limit: 25
      t.string :name, limit: 50, null: false
      t.integer :category_id

      t.string :image_url
      t.text :description
      t.integer :weight

      t.integer :in_stock, default: 1, null: false
      t.boolean :available, default: true, null: false
      t.integer :discount, precision: 2, scale: 0, default: 0, null: false
      t.boolean :discount_available, default: false, null: false
      t.decimal :price, precision: 8, scale: 2, null: false

      t.timestamps
    end
  end
end
