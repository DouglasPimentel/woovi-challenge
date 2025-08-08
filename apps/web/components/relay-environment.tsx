import React from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { createEnvironment } from "@/lib/relay/environment";

type RelayEnvironmentProps = {
  children: React.ReactNode;
};

export default function RelayEnvironment({ children }: RelayEnvironmentProps) {
  const environment = React.useMemo(() => {
    return createEnvironment();
  }, []);

  return <RelayEnvironmentProvider environment={environment}>{children}</RelayEnvironmentProvider>;
}
