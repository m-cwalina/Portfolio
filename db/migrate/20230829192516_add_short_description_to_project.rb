class AddShortDescriptionToProject < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :short_description, :text
  end
end
