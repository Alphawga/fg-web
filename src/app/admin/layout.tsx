"use client";

import { notFound } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import { links } from "./links";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import Image from "next/image";

export default function AppLayout ({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="flex items-center justify-center min-h-screen">
      <Image src="/church-logo.png"
        alt="logo"
        width={200}
        height={200}
        className=" animate-bounce"/>
    </div>;
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
