"use client";

import useScrollPositionStore from "@/store/scroll-position.store";
import useShowHeaderStore from "@/store/show-header.store";
import useStyleHeaderStore from "@/store/style-header.store";
import BeInspired from "@/components/homePageSection/BeInspired";
import ScrollableLocation from "@/components/scrollableLocation/ScrollableLocation";
import HeroSection from "@/components/hero-section/hero-section";
import EventsScroll from "@/components/events-scroll-1/events-scroll";
import HomeFooter from "@/components/footer/Footer";
import Leadership from "@/components/leadership/leadership";
import styleHeader from "@/lib/style-header";
import WelcomeHome from "@/components/welcomeHome/WelcomeHome";
import events from "@/contents/events";

export default function Home () {
  const updateHeaderState: (id: string) => void = useShowHeaderStore((state) => state.setHeaderState);
  const updateHeaderStyle: (id: string) => void = useStyleHeaderStore((state) => state.setHeaderStyle);
  const scrollPosition: number = useScrollPositionStore((state) => state.scrollPosition);
  const updateScrollPosition: (id: number) => void = useScrollPositionStore((state) => state.setScrollPosition);

  return (
    <main onScroll={() => styleHeader("home-hero", updateHeaderState, updateHeaderStyle, scrollPosition, updateScrollPosition)} className="relative h-screen w-full overflow-y-scroll overflow-x-hidden no-scrollbar">
      <HeroSection />
      <EventsScroll title="MEDIA EVENTS AROUND FULL GOSPEL CHURCH OF GOD" events={events} />
      <WelcomeHome />
      <ScrollableLocation />
      <EventsScroll title="MEDIA EVENTS AROUND FULL GOSPEL CHURCH OF GOD" events={events} />
      <BeInspired />
      <Leadership />
      <HomeFooter />
    </main>
  );
}
