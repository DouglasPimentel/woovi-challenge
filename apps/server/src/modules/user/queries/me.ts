import { GraphQLFieldConfig } from "graphql";
import { GraphQLUser } from "@/modules/user/user-type";
import { UserModel, IUser } from "@/modules/user/model";
import type { GraphQLContext } from "@/schema/context";
import { verifyToken } from "@/modules/auth/jwt";

export const MeQuery: GraphQLFieldConfig<IUser, GraphQLContext, unknown> = {
  type: GraphQLUser,
  description: "Get a currently logged in user",
  args: {},
  resolve: async (_root, _args, context) => {
    const { token } = context;

    const decodedToken = await verifyToken(token!);

    const { userId } = decodedToken;

    const user = await UserModel.findById(userId);

    return user;
  },
};
