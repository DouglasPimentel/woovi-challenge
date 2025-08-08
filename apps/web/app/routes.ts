import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("hello-world", "./routes/hello-world.tsx"),
  route("login", "./routes/auth/login.tsx"),
  route("register", "./routes/auth/register.tsx"),
  layout("../layouts/dashboard-layout.tsx", [route("dashboard", "./routes/dashboard.tsx")]),
] satisfies RouteConfig;
