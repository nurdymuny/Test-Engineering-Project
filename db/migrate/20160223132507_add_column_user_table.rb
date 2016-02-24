class AddColumnUserTable < ActiveRecord::Migration
  def change
    add_column :users, :name, :string, default: 0
  end
end
