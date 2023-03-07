# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Skill.destroy_all

Skill.create([
    {icon: 'JS', title: 'Javascript (ES6)', strength: 90, year: '2.5'},
    {icon: 'Ruby', title: 'Ruby', strength: 90, year: '2.5'},
    {icon: 'Rails', title: 'Ruby on Rails', strength: 90, year: '2.5'},
    {icon: 'React', title: 'React.js', strength: 80, year: '2'},
    {icon: 'React-Router', title: 'React-Router', strength: 80, year: '1.5'},
    {icon: 'Redux', title: 'Redux', strength: 50, year: '1'},
    {icon: 'React Native', title: 'React Native', strength: 40, year: '.5'},
    {icon: 'PHP', title: 'PHP', strength: 50, year: '.5'},
    {icon: 'Postgres', title: 'PostgreSQL', strength: 70, year: '2.5'},
    {icon: 'HTML/SCSS', title: 'HTML/SCSS', strength: 90, year: '2.5'},
    {icon: 'Redis', title: 'Redis', strength: 30, year: '1'},
    {icon: 'Heroku', title: 'Heroku', strength: 50, year: '2.5'},
    {icon: 'Git', title: 'Git', strength: 80, year: '2.5'},
    {icon: 'Github', title: 'Github', strength: 80, year: '2.5'},
    {icon: 'Docker', title: 'Docker', strength: 20, year: '.5'},
    {icon: 'Bootstrap', title: 'Bootstrap', strength: 60, year: '.5'},
  ])
