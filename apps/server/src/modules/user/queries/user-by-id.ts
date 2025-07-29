import { GraphQLFieldConfig, GraphQLNonNull, GraphQLID } from "graphql";
import { GraphQLUser } from "@/modules/user/user-type";
import { UserModel } from "@/modules/user/model";

type Args = {
  id: string;
};

export const UserByIDQuery: GraphQLFieldConfig<unknown, unknown, Args> = {
  type: GraphQLUser,
  description: "Fetch a user by their ID",
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: async (root, { id }: Args, context) => {
    const user = await UserModel.findById(id);

    return user;
  },
};
