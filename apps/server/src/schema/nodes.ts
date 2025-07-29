import { nodeDefinitions, fromGlobalId } from "graphql-relay";
import { UserModel } from "@/modules/user/model";

const { nodeField, nodesField, nodeInterface } = nodeDefinitions(async (globalId: string) => {
  const { type, id } = fromGlobalId(globalId);

  if (type === "User") {
    return await UserModel.findById(id);
  }

  return null;
});

export { nodeField, nodesField, nodeInterface };
