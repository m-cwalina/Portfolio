class AddPasswordToProject < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :password, :string
  end
end
