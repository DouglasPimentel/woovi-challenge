import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { UserModel } from "@/modules/user/model";
import { verifyPassword } from "@/modules/user/utils";
import { generateToken } from "@/modules/auth/jwt";

type Input = {
  email: string;
  password: string;
};

type Payload = {
  userId: string | null;
};

export const LoginMutation = mutationWithClientMutationId({
  name: "Login",
  description: "Generate access token for a user",
  inputFields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    accessToken: {
      type: GraphQLString,
      resolve: async ({ userId }: Payload) => {
        if (!userId) {
          return null;
        }

        const token = await generateToken({ userId });

        return token;
      },
    },
  },
  mutateAndGetPayload: async ({ email, password }: Input) => {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return {
        userId: null,
      };
    }

    const isThePasswordValid = await verifyPassword(user.passwordHash, password);

    if (!isThePasswordValid) {
      return {
        userId: null,
      };
    }

    const userId = String(user._id);

    return { userId };
  },
});
