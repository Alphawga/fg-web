"use client";

import { FaChevronRight } from "react-icons/fa";
import React, { BaseSyntheticEvent, ReactNode, useState } from "react";
import { Sidebar, SidebarMobile } from ".";
import { signOut } from "next-auth/react";

export interface Link {
  name: string;
  url: string;
  icon: ReactNode;
}

export default function DashboardShell ({ title, children, hideLogout, logoutRedirectTo = "/login", links = [] }: {
  title?: string;
  links?: Link[];
  children: React.ReactNode;
  logoutRedirectTo?: string;
  hideLogout?: boolean;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const logout = async (e?: BaseSyntheticEvent) => {
    e?.preventDefault();
    await signOut({ callbackUrl: logoutRedirectTo ?? "/" });
  };

  return (
    <div className="grid">
      <SidebarMobile
        title={title}
        logout={logout}
        links={links}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <a href="#" onClick={(e) => {
        e.preventDefault();
        setSidebarOpen(!sidebarOpen);
      }} className="no-underline border border-gray-800 border-solid rounded-tr-xl rounded-br-xl grid items-center absolute bg-white py-1.5 pr-1 -left-0.5 bottom-24 shadow-lg lg:hidden">
        <FaChevronRight className="size-3" />
      </a>
      <div className= "hidden lg:pb-5 lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col border-r border-border justify-between">
        <Sidebar
          title={title}
          links={links}
          logout={logout}
          hideLogout={hideLogout}
        />
      </div>
      <div className="lg:pl-72 overflow-x-hidden">
        <main className="mx-3 my-6 lg:mx-7">
          {children}
        </main>
      </div>
    </div>
  );
}
