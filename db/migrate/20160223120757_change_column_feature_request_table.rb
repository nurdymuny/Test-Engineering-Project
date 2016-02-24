class ChangeColumnFeatureRequestTable < ActiveRecord::Migration
  def change
    remove_column :feature_requests, :target_date
    add_column :feature_requests, :target_date, :string
  end
end
