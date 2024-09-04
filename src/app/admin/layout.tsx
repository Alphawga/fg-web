"use client";

import { notFound } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import { links } from "./links";
import DashboardShell from "@/components/dashboard/dashboard-shell";

export default function AppLayout ({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session?.user.id) {
    notFound();
  }

  return (
    <SessionProvider session={session as Session | null}>
      <DashboardShell links={links}>{children}</DashboardShell>

    </SessionProvider>
  );
}
