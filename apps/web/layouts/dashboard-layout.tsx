import { Outlet } from "react-router";

import Header from "@/components/header";

export default function DashboardLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
