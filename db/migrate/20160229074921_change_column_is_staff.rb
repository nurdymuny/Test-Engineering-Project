class ChangeColumnIsStaff < ActiveRecord::Migration
  def change
    change_column :users, :is_staff, :integer, default: 0
  end
end
