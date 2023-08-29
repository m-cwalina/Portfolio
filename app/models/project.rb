class Project < ApplicationRecord
  has_many :project_skills, dependent: :destroy
  has_many :skills, through: :project_skills, dependent: :destroy
end
