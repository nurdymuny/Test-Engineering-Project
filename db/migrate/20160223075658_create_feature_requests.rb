class CreateFeatureRequests < ActiveRecord::Migration
  def change
    create_table :feature_requests do |t|
      t.string :title
      t.text :description
      t.integer :client_id
      t.integer :client_priority
      t.date :target_date
      t.string :ticket_url
      t.integer :product_id
      t.timestamps null: false
    end
  end
end
