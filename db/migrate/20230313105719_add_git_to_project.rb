class AddGitToProject < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :git, :string
  end
end
