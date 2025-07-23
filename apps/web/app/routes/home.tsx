import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Banking System" },
    { name: "description", content: "Welcome to Banking System!" },
  ];
}

export default function Home() {
  return (
    <main>
      <div>
        <h1>Banking System</h1>
      </div>
    </main>
  );
}
