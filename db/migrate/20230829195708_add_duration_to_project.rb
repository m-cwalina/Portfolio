class AddDurationToProject < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :duration, :string
  end
end
