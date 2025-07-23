import type { Route } from "./+types/register";

import { Logo } from "@woovi-challenge/ui/components/logo";
import { Input } from "@woovi-challenge/ui/components/input";
import { Button } from "@woovi-challenge/ui/components/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register - Banking System" },
    { name: "description", content: "Welcome to Banking System!" },
  ];
}

export default function Register() {
  return (
    <main className="p-5 md:p-0 flex flex-col items-center justify-center min-h-screen">
      <div className="text-center space-y-3">
        <Logo />
        <h3 className="text-base font-medium">Create a new account</h3>
      </div>
      <div className="max-w-full w-full md:max-w-xs md:w-xs mt-8">
        <form className="w-full space-y-5">
          <div className="grid gap-2">
            <label className="text-sm font-bold" htmlFor="taxId">
              Tax ID
            </label>
            <Input
              className="w-full"
              type="text"
              name="taxId"
              id="taxId"
              placeholder="Enter your tax ID"
              required
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-bold" htmlFor="fullName">
              Full Name
            </label>
            <Input
              className="w-full"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-bold" htmlFor="email">
              Email
            </label>
            <Input
              className="w-full"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-bold" htmlFor="password">
              Password
            </label>
            <Input
              className="w-full"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="w-full">
            <Button className="w-full cursor-pointer" type="submit">
              Register
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
