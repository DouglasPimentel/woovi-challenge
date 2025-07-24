import type { Route } from "./+types/home";

import { Logo } from "@woovi-challenge/ui/components/logo";
import CustomNavLink from "@/components/custom-nav-link";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Banking System" }, { name: "description", content: "Welcome to Banking System!" }];
}

export default function Home() {
  return (
    <main className="p-5 md:p-0 flex flex-col items-center justify-center min-h-screen">
      <section>
        <div className="space-y-16">
          <div className="text-center">
            <Logo />
          </div>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <CustomNavLink to="/login" primary={true}>
              I already have an account
            </CustomNavLink>
            <CustomNavLink to="/register" primary={false}>
              Create new account
            </CustomNavLink>
          </nav>
        </div>
      </section>
    </main>
  );
}
