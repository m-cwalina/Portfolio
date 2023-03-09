class Skill < ApplicationRecord
  has_many  :languages, through: :project_skills
end
