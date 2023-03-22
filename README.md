# Lumina Learning Ltd - Software Developer Assignment
We kindly ask you to solve the task below. By solving and submitting this assignment you provide us with insights in how you solve real-world problems. What we will be looking at are topics such as: choice of technology, structuring of code, selection of 3rd party libraries, documentation etc.


## The task
- Build a web application (client) with Javascript or Typescript as the client side language
- Build an API service (server) with PHP or NodeJs as the server side technology
- Use MySQL, MariaDB, PostgreSQL, SQL Server or SQLite as the database

Build an SPA (Single Page Application) that shows everyone's favourite movies from database, it should at least show movie Title, Poster, and Plot synopsis using [OMDb API](https://www.omdbapi.com) or any other public movie API that supports IMDb ID (e.g. tt8526872)

It should also be able to add or remove list of favourite movies.

Please use the data set provided in the SQL dump in this repo as a base.
You can change original asset that you think will make the solution better.
You are allowed to use any library or framework to help you with the task.

## Bonus task
You are not required to complete all of the bonus tasks, but great if you do! We may want to discuss your approach to the bonus tasks during interview so please think of your approach to these challenges even if you do not complete them.

- Use client side framework such as AngularJS, Angular, ReactJS, Vue, etc.
- Add simple authentication for any user (or all users) and only authenticated user could view or edit their favourite movies. You could adjust the database structure if needed.
- Add unit tests
- Serve your solution somewhere on cloud hosting solution e.g. Heroku, DigitalOcean, etc. (just use the free tier one if available, we don't expect you to spend any money for hosting)
- Any other improvement or modification (please add it into the readme and explain your reasoning of the improvement or modification)

## Expectations
Make a copy of this repo. Solve the task. Push your code to a public repo, and send us the link as a reply to our email.

Your solution should include a short readme describing your assumptions regarding the task, technology choice, your solution, how to use/test it and any final considerations such as known errors, limitation, something you struggle with, next steps, security concerns etc.

Don't worry we are not expecting this thing to be perfect.

## Note
To get an API key in [OMDb API](https://www.omdbapi.com), you will need to register with your name and email address. If you do not consent to give such details to OMDb API, please let us know and we will happily give you an API key for this assignment.


## Solution
A backend Nodejs server was created to expose RESTful API endpoints utilized by a
React based frontend UI.

- On page load, the frontend makes an API call to get a list of users and their corresponding details. 
- The first user in the list is selected as the current user.
- The current user's list of favorites movie ids are fetched from the backend server and the movieIds
are utilized to get the movie details from the OMDb API.
- To remove a favorite movie from the list, the user clicks on the delete button.
- To add a new movie to the list, the user searches for the movie using the search field which is connected to the OMDb API.
The user then clicks on the movie to add it to the list.

### Technology choice
#### Client
- React
- Typescript
- React Query
- Material UI React
- Axios

#### Server
- Node.js
- Express
- Sequelize
- PostgreSQL

### Setup
#### Server
- Start up local instance of postgresql
- Create database named `lumina_test`
- cd server
- `npm install`
- `npm start`

#### Client
- cd client
- `npm install`
- `npm start`

### Next steps
- Add more user interactions on the client
- Make server more resilient
- Add tests
