class CreateSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :skills do |t|
      t.string :title
      t.string :icon
      t.integer :strength

      t.timestamps
    end
  end
end
