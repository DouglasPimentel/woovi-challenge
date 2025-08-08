import fs from "node:fs";
import path from "node:path";
import { printSchema } from "graphql";
import { schema } from "../src/schema";

const cwd = process.cwd();

const root = (...segments: string[]) => path.join(cwd, ...segments);

async function updateSchema() {
  const schemaPath = path.resolve(root("schema/schema.graphql"));

  const data = printSchema(schema);

  fs.writeFile(schemaPath, data, () => {
    console.log("Schema GraphQL generated successfully");
  });
}

updateSchema();
