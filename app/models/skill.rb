class Skill < ApplicationRecord
  has_many :projects
  has_many :languages, through: :project_skills
end
