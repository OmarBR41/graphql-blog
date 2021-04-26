import { GraphQLSchema, GraphQLObjectType } from "graphql";
// Queries
import post from "./queries/post";
import posts from "./queries/posts";
import author from "./queries/author";
// Mutations
import addPost from "./mutations/addPost";
import addComment from "./mutations/addComment";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQuery",
    fields: () => ({
      ...post,
      ...posts,
      ...author,
    }),
  }),

  mutation: new GraphQLObjectType({
    name: "RootMutation",
    fields: () => ({
      ...addPost,
      ...addComment,
    }),
  }),
});

export default schema;
