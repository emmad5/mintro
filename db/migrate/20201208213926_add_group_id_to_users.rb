class AddGroupIdToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :group_id, :integer
    add_column :users, :phone, :string
    add_column :users, :preferences, :text
  end
end
