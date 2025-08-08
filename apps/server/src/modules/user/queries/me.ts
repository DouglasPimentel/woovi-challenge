import { GraphQLFieldConfig } from "graphql";
import { GraphQLUser } from "@/modules/user/user-type";
import { UserModel, IUser } from "@/modules/user/model";
import type { GraphQLContext } from "@/schema/context";
import { verifyToken } from "@/modules/auth/jwt";

type Args = {};

export const MeQuery: GraphQLFieldConfig<IUser, GraphQLContext, Args> = {
  type: GraphQLUser,
  description: "Get a currently logged in user",
  args: {},
  resolve: async (root, args, context) => {
    const { token } = context;

    const decodedToken = await verifyToken(token!);

    const { userId } = decodedToken;

    const user = await UserModel.findById(userId);

    return user;
  },
};
