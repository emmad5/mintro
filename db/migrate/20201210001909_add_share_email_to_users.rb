class AddShareEmailToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :share_email, :string
  end
end
