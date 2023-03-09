class AddCodeSnippetTextToProject < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :code_snippet_text, :string
  end
end
