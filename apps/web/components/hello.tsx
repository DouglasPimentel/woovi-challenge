import { graphql, useLazyLoadQuery } from "react-relay";
import type { helloWorldQuery as QueryType } from "../__generated__/helloWorldQuery.graphql";

export const helloWorldQuery = graphql`
  query helloWorldQuery {
    hello
  }
`;

export default function Hello() {
  const data = useLazyLoadQuery<QueryType>(helloWorldQuery, {});

  return <h1 className="text-lg font-bold">{data.hello}</h1>;
}
