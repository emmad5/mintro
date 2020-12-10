class AddExpertiseToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :expertise, :string
  end
end
