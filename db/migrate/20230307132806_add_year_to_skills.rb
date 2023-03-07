class AddYearToSkills < ActiveRecord::Migration[6.1]
  def change
    add_column :skills, :year, :string
  end
end
