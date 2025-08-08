import {
  Network,
  Store,
  RecordSource,
  Environment,
  Observable,
  type IEnvironment,
  type RequestParameters,
  type Variables,
} from "relay-runtime";

const GRAPHQL_ENDPOINT = "http://localhost:8080/graphql";

function fetchFn(params: RequestParameters, variables: Variables) {
  const response = fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: [["Content-Type", "application/json"]],
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  return Observable.from(response.then(data => data.json()));
}

export function createEnvironment(): IEnvironment {
  const network = Network.create(fetchFn);
  const source = new RecordSource();
  const store = new Store(source);

  const environment = new Environment({ store, network });

  return environment;
}
