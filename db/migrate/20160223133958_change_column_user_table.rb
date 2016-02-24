class ChangeColumnUserTable < ActiveRecord::Migration
  def change

    change_column :users, :is_staff, :integer, default: ''
  end
end
