"use client";

import useScrollPositionStore from "@/store/scroll-position.store";
import useShowHeaderStore from "@/store/show-header.store";
import useStyleHeaderStore from "@/store/style-header.store";
import HeroSection from "./sections/hero-section";
import styleHeader from "@/lib/style-header";
import PrayerForm from "./sections/prayer-form";
import HomeFooter from "@/components/footer/Footer";

export default function Home () {
  const updateHeaderState: (id: string) => void = useShowHeaderStore((state) => state.setHeaderState);
  const updateHeaderStyle: (id: string) => void = useStyleHeaderStore((state) => state.setHeaderStyle);
  const scrollPosition: number = useScrollPositionStore((state) => state.scrollPosition);
  const updateScrollPosition: (id: number) => void = useScrollPositionStore((state) => state.setScrollPosition);

  return (
    <main onScroll={() => styleHeader("prayer-request-hero", updateHeaderState, updateHeaderStyle, scrollPosition, updateScrollPosition)} className="relative h-screen w-full overflow-y-scroll no-scrollbar">
      <HeroSection />
      <PrayerForm />
      <HomeFooter />
    </main>
  );
}
