class Project < ApplicationRecord
  has_many :skills, through: :project_skills
end
