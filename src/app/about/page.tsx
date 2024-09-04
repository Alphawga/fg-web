"use client";

import useScrollPositionStore from "@/store/scroll-position.store";
import useShowHeaderStore from "@/store/show-header.store";
import useStyleHeaderStore from "@/store/style-header.store";
import HeroSection from "./sections/hero/page";
import styleHeader from "@/lib/style-header";
import Mission from "./sections/mission";
import More from "./sections/more";
import StayUpdated from "./sections/stay-updated";
import HomeFooter from "@/components/footer/Footer";

export default function Home () {
  const updateHeaderState: (id: string) => void = useShowHeaderStore((state) => state.setHeaderState);
  const updateHeaderStyle: (id: string) => void = useStyleHeaderStore((state) => state.setHeaderStyle);
  const scrollPosition: number = useScrollPositionStore((state) => state.scrollPosition);
  const updateScrollPosition: (id: number) => void = useScrollPositionStore((state) => state.setScrollPosition);

  return (
    <main onScroll={() => styleHeader ("about-hero", updateHeaderState, updateHeaderStyle, scrollPosition, updateScrollPosition)} className="relative h-screen w-full overflow-y-scroll no-scrollbar">
      <HeroSection />
      <Mission />
      <More />
      <StayUpdated />
      <HomeFooter />
    </main>
  );
}
