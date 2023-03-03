# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Skill.destroy_all

Skill.create([
    {icon: 'JS', title: 'Javascript', strength: 8},
    {icon: 'Ruby', title: 'Ruby', strength: 8},
    {icon: 'Rails', title: 'Ruby on Rails', strength: 9},
    {icon: 'React', title: 'React.js', strength: 8},
  ])
