class AddUsernameToProject < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :username, :string
  end
end
