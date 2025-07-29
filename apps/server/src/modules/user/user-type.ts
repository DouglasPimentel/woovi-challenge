import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";
import { globalIdField, connectionDefinitions } from "graphql-relay";
import { IUser } from "@/modules/user/model";
import { nodeInterface } from "@/schema/nodes";

export const GraphQLUser: GraphQLObjectType<IUser> = new GraphQLObjectType<IUser>({
  name: "User",
  description: "Represents a user",
  fields: () => ({
    id: globalIdField("User"),
    _id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The unique identifier for the user in the database",
      resolve: user => user._id,
    },
    taxId: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The tax identification number of the user",
      resolve: user => user.taxId,
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The full name of the user",
      resolve: user => user.name,
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The email address of the user",
      resolve: user => user.email,
    },
    passwordHash: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The hashed password of the user",
      resolve: user => user.passwordHash,
    },
    role: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The role of the user, e.g., admin or user",
      resolve: user => user.role,
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The date and time when the user was created",
      resolve: user => user.createdAt.toISOString(),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The date and time when the user was last updated",
      resolve: user => user.updatedAt.toISOString(),
    },
  }),
  interfaces: () => [nodeInterface],
});

const { connectionType, edgeType } = connectionDefinitions({
  name: "User",
  nodeType: GraphQLUser,
});

export const UserConnectionType = connectionType;
export const UserEdgeType = edgeType;
