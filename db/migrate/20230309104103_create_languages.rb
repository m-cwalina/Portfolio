class CreateLanguages < ActiveRecord::Migration[6.1]
  def change
    create_table :languages do |t|
      t.string :language
      t.references :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end