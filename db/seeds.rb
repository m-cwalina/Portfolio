# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Skill.destroy_all

Skill.create([
    {icon: 'JS', title: 'Javascript (ES6)', strength: 90},
    {icon: 'Ruby', title: 'Ruby', strength: 90},
    {icon: 'Rails', title: 'Ruby on Rails', strength: 90},
    {icon: 'React', title: 'React.js', strength: 80},
    {icon: 'React-Router', title: 'React-Router', strength: 80},
    {icon: 'Redux', title: 'Redux', strength: 50},
    {icon: 'React Native', title: 'React Native', strength: 40},
    {icon: 'PHP', title: 'PHP', strength: 50},
    {icon: 'Postgres', title: 'PostgreSQL', strength: 70},
    {icon: 'HTML/SCSS', title: 'HTML/SCSS', strength: 90},
    {icon: 'Redis', title: 'Redis', strength: 30},
    {icon: 'Heroku', title: 'Heroku', strength: 50},
    {icon: 'Git', title: 'Git', strength: 80},
    {icon: 'Github', title: 'Github', strength: 80},
    {icon: 'Docker', title: 'Docker', strength: 20},
  ])
