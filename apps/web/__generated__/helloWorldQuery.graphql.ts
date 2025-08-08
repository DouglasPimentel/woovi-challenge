/**
 * @generated SignedSource<<d34117b07459ec6ec3fd13e81c194202>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type helloWorldQuery$variables = Record<PropertyKey, never>;
export type helloWorldQuery$data = {
  readonly hello: string | null | undefined;
};
export type helloWorldQuery = {
  response: helloWorldQuery$data;
  variables: helloWorldQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hello",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "helloWorldQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "helloWorldQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "da8c29421545b5530e9274260b897db7",
    "id": null,
    "metadata": {},
    "name": "helloWorldQuery",
    "operationKind": "query",
    "text": "query helloWorldQuery {\n  hello\n}\n"
  }
};
})();

(node as any).hash = "6ea0abdbe6ba43f9ee1e4dadc6efcd85";

export default node;
