import { GraphQLObjectType } from "graphql";
import { AddUserMutation, LoginMutation } from "@/modules/user/mutations";

export const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: AddUserMutation,
    login: LoginMutation,
  },
});
