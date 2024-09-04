"use client";

import React from "react";
import styleHeader from "@/lib/style-header";
import useScrollPositionStore from "@/store/scroll-position.store";
import useShowHeaderStore from "@/store/show-header.store";
import useStyleHeaderStore from "@/store/style-header.store";
import Give from "./sections/give/page";
import HomeFooter from "@/components/footer/Footer";

export default function Home () {
  const updateHeaderState: (id: string) => void = useShowHeaderStore((state) => state.setHeaderState);
  const updateHeaderStyle: (id: string) => void = useStyleHeaderStore((state) => state.setHeaderStyle);
  const scrollPosition: number = useScrollPositionStore((state) => state.scrollPosition);
  const updateScrollPosition: (id: number) => void = useScrollPositionStore((state) => state.setScrollPosition);

  return (
    <div onScroll={() => styleHeader ("give-hero", updateHeaderState, updateHeaderStyle, scrollPosition, updateScrollPosition)} className="relative h-screen w-full overflow-y-scroll no-scrollbar">
      <Give />
      <HomeFooter />
    </div>
  );
}
