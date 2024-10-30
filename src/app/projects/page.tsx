"use client";

import useScrollPositionStore from "@/store/scroll-position.store";
import useShowHeaderStore from "@/store/show-header.store";
import useStyleHeaderStore from "@/store/style-header.store";
import ProjectHero from "@/components/projects/project-hero";
import ProjectBody from "@/components/projects/project-body";
import HomeFooter from "@/components/footer/Footer";
import styleHeader from "@/lib/style-header";
import ProjectList from "@/components/projects/project-list";
import ProjectSummary from "@/components/projects/project-summary";

export default function Projects () {
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
          "project-hero",
          updateHeaderState,
          updateHeaderStyle,
          scrollPosition,
          updateScrollPosition
        )
      }
      className="relative h-screen w-full overflow-y-scroll no-scrollbar"
    >
      <ProjectHero />
      <div className="bg-[#231f20]">
        <div className="w-[60%] xs:max-md:w-[90%] mx-auto py-20 xs:max-md:py-10">
          <ProjectBody />
        </div>
      </div>
      <ProjectList />
      <ProjectSummary />
      <HomeFooter />
    </main>
  );
}
