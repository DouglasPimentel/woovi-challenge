import { type NavLinkProps, NavLink } from "react-router";

import { cn } from "@woovi-challenge/ui/lib/utils";

export type CustomNavLinkProps = NavLinkProps & {
  primary: boolean;
};

export default function CustomNavLink({ className, children, primary = true, ...props }: CustomNavLinkProps) {
  return (
    <NavLink
      className={cn(
        "h-9 px-4 py-2 has-[>svg]:px-3 whitespace-nowrap rounded-md text-sm font-medium border border-solid",
        "inline-flex items-center justify-center gap-2 transition-all",
        primary
          ? "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90"
          : "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        className,
      )}
      {...props}
    >
      {children}
    </NavLink>
  );
}
