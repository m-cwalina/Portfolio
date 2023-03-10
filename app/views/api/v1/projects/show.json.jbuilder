json.extract! @project, :id, :title, :image, :description, :learn, :code_snippet, :code_snippet_text
  json.languages @project.skills do |skill|
    json.title skill.title
    json.icon skill.icon
  end
