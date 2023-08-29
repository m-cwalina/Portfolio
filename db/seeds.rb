# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ProjectSkill.destroy_all
Project.destroy_all
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
  {icon: 'MUI', title: 'Material-UI', strength: 75, year: '.5'},
])

Project.create(
  title: 'ForteFans',
  image: 'ForteFans',
  rank: '1st',
  duration: '1 year',
  link: '',
  username: '',
  password: '',
  git: '',
  description: 'A mobile based application for sharing and tracking links across multiple platforms.',
  short_description: 'Share music with your followers',
  learn: 'Share your music across Social Media platforms',
  code_snippet: 'ForteFans',
  code_snippet_text: 'I have created a Spotify controller that has a couple of methods to connect a user to their Spotify account.
                      The first method takes an authorization code that is retrieved from the React Native Frontend. I pass that code
                      to the backend in the query parameters seen here. This code is used to retreive an access token. The access token is handled and refreshed
                      in the spotify service object to make calls to the Spotify API. The other methods call the service object to make requests to the spotify API
                      and handle errors so that Redux can handle the state incase of of errors returned from the service object.'
)

Project.create(
  title: 'ConnectGolf',
  image: 'ConnectGolf',
  rank: '2nd',
  duration: '3 months',
  link: 'https://connectgolf.herokuapp.com',
  username: '1@gmail.com',
  password: 'password',
  git: 'https://github.com/m-cwalina/ConnectGolf',
  short_description: 'Connect with your golf members',
  description: 'A web application to connect golfers with their club and other members.
                Also provided is an Admin DashBoard for a booking system and club statistics.',
  learn: 'This project brought together React.js with React-Router to build a SPA appliaction.
          I also moved into Chart.js to show data in a friendly UI format. The Rails API handles
          authentication through Devise and PostgreSQL for a DB.',
  code_snippet: 'ConnectGolf',
  code_snippet_text: "These two scope lambda functions are taken from the self-referential User model.
                      The first function, all_except, is used to find all user_ids except for his/her
                      user_id. The second lambda finds all users that have no friendship relation to that specific
                      user. I iterate over all user.friendships that have the correpsonding friend_id. This returns
                      all users that have no friendship relation. In short, all users that aren't current friends."
)

Project.create(
  title: 'PfandMe2.0',
  image: 'PfandMe',
  rank: '3rd',
  duration: '2 weeks',
  link: 'https://pfandme2.herokuapp.com',
  username: '1@gmail.com',
  password: 'password',
  git: 'https://github.com/m-cwalina/PfandMe2.0',
  short_description: 'Recycle your bottles done easy',
  description: 'This mobile first application connects a user and PfandMe employee to pick up their recycling at home.
                The Apps user flow starts by a request for your bottles to be retrieved at home and automatically
                being connected with a PfandMe employee to pick them up.',
  learn: 'Get your recycling picked up at home!',
  code_snippet: 'PfandMe',
  code_snippet_text: 'In this create action I first create a new instance of Appointment with the strong pramas
                      defined under private. I save a user to the instance variable, @appointment, defined above.
                      I set that equal to the current_user (helper from devise). I save this appointment in order for
                      the users address to be calculated in the form that was posted. I then define a @picker to the
                      nearest employee in relation to the user address. I then set this @picker to the @appointment.
                      I save the appointment and redirect to the appointment show page.'
)

Project.create(
  title: 'Chart UI',
  image: 'Charts',
  duration: '3 days',
  link: 'https://codesandbox.io/s/chart-ui-y5pekr',
  rank: '4th',
  username: '',
  password: '',
  git: '',
  description: 'This application was created with codesandbox. It showcases sales representatives and their numbers.
                Each table row has more detailed information with chart visualizations.',
  short_description: 'Charts for data visualization',
  learn: 'Charts for data UI visualization',
  code_snippet: 'Charts',
  code_snippet_text: 'This piece of code uses Chart.js to build a detailed chart. The chart takes option labels to
                      determine the amount of days on the x-axis. I check if the data has null values and iterate
                      over the history daysAgo if values are present. The first dataset takes a pilytixProb as label.
                      The data is then checked for null values and iteratered over if values are present. This code is
                      passed down as an object to Line (provided by Chart.js) in the return function.'
)

Project.create(
  title: 'Portfolio',
  image: 'Portfolio',
  rank: '5th',
  duration: 'ongoing',
  link: '',
  username: '',
  password: '',
  git: 'https://github.com/m-cwalina/Portfolio',
  short_description: 'All projects and skills',
  description: 'The portfolio showecases most of my previous work and myself.',
  learn: 'My previous work',
  code_snippet: 'Portfolio',
  code_snippet_text: 'I am using React MUI for React UI components and React-Router for API calls and routing.
                      Here, I pass an argument skill through a SkillCard function to then be later iterated over a
                      function called skillList. I then use skillList to display all skills in the render component.'
)

project_skills_map = {
  'ForteFans' => ['Javascript (ES6)', 'Ruby', 'Ruby on Rails', 'Redux', 'React Native', 'PostgreSQL', 'HTML/SCSS', 'Git', 'Github'],
  'ConnectGolf' => ['Javascript (ES6)', 'Ruby', 'Ruby on Rails', 'React.js', 'React-Router', 'PostgreSQL', 'HTML/SCSS', 'Heroku', 'Git', 'Github', 'Bootstrap'],
  'PfandMe2.0' => ['Javascript (ES6)', 'Ruby', 'Ruby on Rails', 'PostgreSQL', 'HTML/SCSS', 'Heroku', 'Git', 'Github', 'Bootstrap'],
  'Portfolio' => ['Javascript (ES6)', 'Ruby', 'Ruby on Rails', 'React.js', 'React-Router', 'PostgreSQL', 'HTML/SCSS', 'Heroku', 'Git', 'Github', 'Bootstrap'],
  'Chart UI' => ['Javascript (ES6)', 'React.js', 'React-Router', 'HTML/SCSS']
}

# Step 2: Iterate and create the ProjectSkill instances

project_skills_map.each do |project_title, skills|
  project = Project.find_by(title: project_title)  # Assuming title is unique
  skills.each do |skill_title|
    skill = Skill.find_by(title: skill_title)
    ProjectSkill.create(project: project, skill: skill) unless ProjectSkill.exists?(project: project, skill: skill)
  end
end
