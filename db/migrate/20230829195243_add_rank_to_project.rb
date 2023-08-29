class AddRankToProject < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :rank, :string
  end
end
