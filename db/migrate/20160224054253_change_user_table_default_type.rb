class ChangeUserTableDefaultType < ActiveRecord::Migration
  def change
    change_column :users, :first_name, :string, default: ''
  end
end
