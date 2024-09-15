"use client";

import useScrollPositionStore from "@/store/scroll-position.store";
import useShowHeaderStore from "@/store/show-header.store";
import useStyleHeaderStore from "@/store/style-header.store";
import LeadershipHero from "@/components/leadership/leadership-hero";
import LeadershipBody from "@/components/leadership/leadership-body";
import LeadershipNote from "@/components/leadership/leadership-note";
import HomeFooter from "@/components/footer/Footer";
import LeadershipBooks from "@/components/leadership/leadership-books";
import styleHeader from "@/lib/style-header";

export default function Leadership () {
  const updateHeaderState: (id: string) => void = useShowHeaderStore(
    (state) => state.setHeaderState
  );

  const updateHeaderStyle: (id: string) => void = useStyleHeaderStore(
    (state) => state.setHeaderStyle
  );

  const scrollPosition: number = useScrollPositionStore(
    (state) => state.scrollPosition
  );

  const updateScrollPosition: (id: number) => void = useScrollPositionStore(
    (state) => state.setScrollPosition
  );

  return (
    <main
      onScroll={() =>
        styleHeader(
          "leadership-hero",
          updateHeaderState,
          updateHeaderStyle,
          scrollPosition,
          updateScrollPosition
        )
      }
      className="relative h-screen w-full overflow-y-scroll no-scrollbar"
    >
      <LeadershipHero />
      <div className="bg-[#231f20]">
        <div className="w-[60%] xs:max-md:w-[90%]  mx-auto py-20 xs:max-md:py-10">
          <LeadershipBody />
        </div>
      </div>
      <LeadershipNote />
      <LeadershipBooks />
      <HomeFooter />
    </main>
  );
}
