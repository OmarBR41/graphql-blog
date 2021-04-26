# graphql-blog

A blog backend using GraphQL.

- No frontend (yet).
- There's no actual database, I'm instead using `src/FakeDatabase.js`'s content to simulate a blog database for testing purposes.
- Includes Babel configuration.
- Web server running on ExpressJS.

## How-to

- Clone the repo.
- Install the dependencies: `npm install`.
- Run `npm run server` in the terminal to build the project and start the server.
- With the server running, visit `localhost:4000/graphql` to start using GraphiQL and make some queries and mutations.
