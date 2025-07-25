import type { Route } from "./+types/dashboard";

import Header from "@/components/header";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Dashboard - Banking System" }, { name: "description", content: "Welcome to Banking System!" }];
}

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="mt-8 px-8">
        <section>
          <h2 className="text-xl font-bold">Welcome, João da Silva</h2>
        </section>
        <section className="w-full mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold">Account Balance</h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Latest transactions</h3>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
