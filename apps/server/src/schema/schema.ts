import { GraphQLSchema } from "graphql";
import { QueryType } from "@/schema/query-type";
import { MutationType } from "@/schema/mutation-type";

export const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
