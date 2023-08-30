class AddDifficultyToProject < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :difficulty, :string
  end
end
