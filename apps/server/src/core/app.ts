import Koa from "koa";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import Router from "koa-router";
import { graphqlHTTP } from "koa-graphql";
import { schema } from "@/schema";

export const app = new Koa();
const routes = new Router();

app.use(logger());
app.use(
  bodyParser({
    onerror(error, ctx) {
      ctx.throw(error, 422);
    },
  }),
);

routes.get("/", async ctx => {
  ctx.status = 200;
  ctx.type = "application/json";
  ctx.body = JSON.stringify(
    {
      message: "Welcome to the Koa server!",
    },
    null,
    2,
  );
});

routes.all(
  "/graphql",
  graphqlHTTP(request => ({
    schema,
    context: {
      token: request.ctx.header.authorization?.split(" ")[1],
    },
    graphiql: {
      headerEditorEnabled: true,
    },
  })),
);

app.use(routes.routes());
app.use(routes.allowedMethods());
