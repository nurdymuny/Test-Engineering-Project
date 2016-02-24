class ChangeTypeUserTable < ActiveRecord::Migration
  def change
    change_column :users, :first_name, :string
  end
end
