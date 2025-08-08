import type { Route } from "./+types/hello-world";

import Hello from "@/components/hello";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Hello World - Banking System" }, { name: "description", content: "Welcome to Banking System!" }];
}

export default function HelloWorld() {
  return (
    <main className="w-full h-screen">
      <section className="w-full h-full flex items-center justify-center">
        <Hello />
      </section>
    </main>
  );
}
