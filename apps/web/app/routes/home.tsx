import type { Route } from "./+types/home";

import { Logo } from "@woovi-challenge/ui/components/logo";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Banking System" }, { name: "description", content: "Welcome to Banking System!" }];
}

export default function Home() {
  return (
    <main>
      <div>
        <Logo />
      </div>
    </main>
  );
}
