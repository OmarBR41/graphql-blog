import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

const PORT = 4000;
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

console.log("Starting server...");

app.listen(PORT);
