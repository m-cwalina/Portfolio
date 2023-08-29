json.array! @projects do |project|
  json.extract! project, :id, :title, :image, :short_description, :rank, :duration
  json.languages project.skills do |skill|
    json.title skill.title
    json.strength skill.strength
  end
end
