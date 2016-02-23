class CreateProductAreas < ActiveRecord::Migration
  def change
    create_table :product_areas do |t|
      t.string :product_area
      t.text :product_description

      t.timestamps null: false
    end
  end
end
