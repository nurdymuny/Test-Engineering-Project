class AddColumnRequestTableStatus < ActiveRecord::Migration
  def change
    add_column :feature_requests, :status, :integer, default: 0
  end
end
