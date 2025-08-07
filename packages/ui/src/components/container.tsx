import * as React from "react";

import { cn } from "@woovi-challenge/ui/lib/utils";

export type ContainerProps = React.ComponentProps<"div">;

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn("container lg:mx-auto px-5 lg:px-5", className)} {...props}>
      {children}
    </div>
  );
}
