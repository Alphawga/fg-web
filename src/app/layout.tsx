"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import TRPCProvider from "./_providers/trpc-provider";
import { SessionProvider } from "next-auth/react";
import DesktopHeader from "@/components/header/desktop-header";
import MobileHeader from "@/components/header/mobile-header";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout ({ children }: Readonly<{
  children: React.ReactNode;
}>)

{
  const pathname = usePathname();

  if(pathname?.includes("/admin") || pathname?.includes("/login")) {
    return(
      <html lang="en">
        <body className={`relative ${inter.className}`}>
          <SessionProvider>
            <TRPCProvider>
              {children}
            </TRPCProvider>
            <Toaster />
          </SessionProvider>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`relative ${inter.className}`}>
        <SessionProvider>
          <TRPCProvider>
            <DesktopHeader />
            <MobileHeader />
            {children}
          </TRPCProvider>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
