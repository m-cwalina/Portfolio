# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Skill.destroy_all
Project.destroy_all
ProjectSkill.destroy_all

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

connectgolf = Project.create(
    title: 'ConnectGolf',
    image: 'ConnectGolf',
    description: 'A web application to connect golfers with their club and other members.
                  Also provided is an Admin DashBoard for a booking system and club statistics.',
    learn: 'This project brought together React.js with React-Router to build a SPA appliaction.
            I also moved into Chart.js to show data in a friendly UI format. The Rails API handles
            authentication through Devise and PostgreSQL for a DB.',
    code_snippet: 'ConnectGolf',
    code_snippet_text: "This self-referential model allows for user to become friends with other users. The friendship
                        model is a join table that has user and friends as references. Friend refers to the class User
                        as seen on line 3. The callback create_inverse is called everytime the create method is called.
                        The callback calls itself so that each user each user has a friendship that is now pending.
                        The callback check_user makes sure that the user requesting the friendship isn't themselves."
)

pfandme = Project.create(
    title: 'PfandMe2.0',
    image: "PfandMe",
    description: 'This mobile first application connects a user and employee to pick up their recycling at home.
                  The App flows by making a request for your bottles to be retrieved at home and automatically
                  being connected with a PfandMe employee to pick them up.',
    learn: 'In this project I learned how to use a gem to connect the nearest employee with a user. The gem calculates the
            distance between both user and employee. I displayed this information on a map for a clear UI',
    code_snippet: 'PfandMe',
    code_snippet_text: 'In this create action I first create a new instance of Appointment with the strong pramas
                        defined under private. I save a user to the instance variable, @appointment, defined above.
                        I set that equal to the current_user (helper from devise). I save this appointment in order for
                        the users address to be calculated in the form that was posted. I then define a @picker to the
                        nearest employee in relation to the user address. I then set this @picker to the @appointment.
                        I save the appointment and redirect to the appointment show page.'
)

portfolio = Project.create(
    title: 'Portfolio',
    image: 'Portfolio',
    description: 'The portfolio showecases most of my previous work and myself.',
    learn: 'I learned how to abstract larger React Components into more manageable functions. I learned to pass
            arguments through functions to create a more robust function to be rendered inside the React component',
    code_snippet: 'Portfolio',
    code_snippet_text: 'I am using React MUI for React UI components and React-Router for API calls and routing.
                        Here, I pass an argument skill through a SkillCard function to then be later iterated over a
                        function called skillList. I then use skillList to display all skills in the render component.'
)

ProjectSkill.create([
    {project_id: connectgolf.id, skill_id: 1}, {project_id: connectgolf.id, skill_id: 2}, {project_id: connectgolf.id, skill_id: 3},
    {project_id: connectgolf.id, skill_id: 4}, {project_id: connectgolf.id, skill_id: 5}, {project_id: connectgolf.id, skill_id: 9},
    {project_id: connectgolf.id, skill_id: 10}, {project_id: connectgolf.id, skill_id: 11}, {project_id: connectgolf.id, skill_id: 12},
    {project_id: connectgolf.id, skill_id: 13}, {project_id: connectgolf.id, skill_id: 14}, {project_id: connectgolf.id, skill_id: 16},

    {project_id: pfandme.id, skill_id: 1}, {project_id: pfandme.id, skill_id: 2}, {project_id: pfandme.id, skill_id: 3},
    {project_id: pfandme.id, skill_id: 9}, {project_id: pfandme.id, skill_id: 10}, {project_id: pfandme.id, skill_id: 12},
    {project_id: pfandme.id, skill_id: 13}, {project_id: pfandme.id, skill_id: 14}, {project_id: pfandme.id, skill_id: 16},

    {project_id: portfolio.id, skill_id: 1}, {project_id: portfolio.id, skill_id: 2}, {project_id: portfolio.id, skill_id: 3},
    {project_id: portfolio.id, skill_id: 4}, {project_id: portfolio.id, skill_id: 5}, {project_id: portfolio.id, skill_id: 9},
    {project_id: portfolio.id, skill_id: 10}, {project_id: portfolio.id, skill_id: 11}, {project_id: portfolio.id, skill_id: 12},
    {project_id: portfolio.id, skill_id: 13}, {project_id: portfolio.id, skill_id: 14}, {project_id: portfolio.id, skill_id: 16},
])
