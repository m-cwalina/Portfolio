class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :image
      t.string :description
      t.string :github
      t.string :learn
      t.string :code_snippet

      t.timestamps
    end
  end
end
