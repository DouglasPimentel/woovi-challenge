import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { UserModel } from "@/modules/user/model";
import { GraphQLUser } from "@/modules/user/user-type";
import { hashPassword } from "@/modules/user/utils";

type Input = {
  taxId: string;
  name: string;
  email: string;
  password: string;
};

type Payload = {
  userId: string;
};

export const AddUserMutation = mutationWithClientMutationId({
  name: "AddUser",
  description: "Create new user",
  inputFields: {
    taxId: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    user: {
      type: new GraphQLNonNull(GraphQLUser),
      resolve: async ({ userId }: Payload) => {
        const user = await UserModel.findById(userId);

        return user;
      },
    },
  },
  mutateAndGetPayload: async ({ taxId, name, email, password }: Input) => {
    const hash = await hashPassword(password);

    const newUser = await new UserModel({ taxId, name, email, passwordHash: hash }).save();

    const userId = String(newUser._id);

    return { userId };
  },
});
