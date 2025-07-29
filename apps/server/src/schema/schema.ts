import { GraphQLSchema } from "graphql";
import { QueryType } from "@/schema/query-type";

export const schema = new GraphQLSchema({
  query: QueryType,
});
