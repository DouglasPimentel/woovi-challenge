import { GraphQLFieldConfig, GraphQLNonNull, GraphQLID } from "graphql";
import { GraphQLUser } from "@/modules/user/user-type";
import { UserModel, IUser } from "@/modules/user/model";
import type { GraphQLContext } from "@/schema/context";

type Args = {
  id: string;
};

export const UserByIDQuery: GraphQLFieldConfig<IUser, GraphQLContext, Args> = {
  type: GraphQLUser,
  description: "Fetch a user by their ID",
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: async (root, { id }, context) => {
    const user = await UserModel.findById(id);

    return user;
  },
};
