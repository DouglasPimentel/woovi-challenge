import { GraphQLObjectType, GraphQLString } from "graphql";

export const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root query type for the GraphQL schema",
  fields: () => ({
    hello: {
      type: GraphQLString,
      description: "A simple hello world query",
      resolve: () => "Hello, world!",
    },
  }),
});
