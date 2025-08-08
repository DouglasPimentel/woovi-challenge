import { GraphQLObjectType, GraphQLString } from "graphql";
import { nodeField, nodesField } from "@/schema/nodes";
import { UserByIDQuery, MeQuery } from "@/modules/user/queries";

export const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root query type for the GraphQL schema",
  fields: () => ({
    node: nodeField,
    nodes: nodesField,
    hello: {
      type: GraphQLString,
      description: "A simple hello world query",
      resolve: () => "Hello, world!",
    },
    userById: UserByIDQuery,
    me: MeQuery,
  }),
});
