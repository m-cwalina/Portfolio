class Skill < ApplicationRecord
  has_many :project_skills, dependent: :destroy
  has_many :projects, through: :project_skills, dependent: :destroy
  # has_many :languages, through: :project_skills, dependent: :destroy
end
