"use client";

import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon: React.ReactNode;
  name: string;
  className?: string;
}

export function SidebarItem ({
  href,
  name,
  icon,
  className,
  ...props
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "w-full !justify-start",
        buttonVariants({ variant: "ghost" }),
        className
      )}
      {...props}
    >
      {icon}
      {name}
    </Link>

  );
}
