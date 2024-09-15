import { experienceLinks, goLinks, learnLinks } from "@/contents/sidebar-links";
import SideNavLinks from "@/components/side-nav-links/side-nav-links";
import useMobileSideNavBarStore from "@/store/mobile-side-nav.store";

function ArrowRight () {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={4}
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

export default function MobileSecSideNavBar () {
  const option = useMobileSideNavBarStore((state) => state.option);
  const updateOption = useMobileSideNavBarStore((state) => state.setOption);

  return (
    <div className="absolute z-20 top-0 right-[10%] w-[90%] h-screen bg-[#231f20] animate-accordion-right">
      <div
        onClick={() => updateOption("")}
        className="w-full h-14 bg-[#231f20] shadow-lg shadow-[#1c1c1c] flex items-center gap-2 px-5 cursor-pointer"
      >
        <div className="text-[#d3b975] rotate-180 inline-block">
          <ArrowRight />
        </div>
        <p className="text-[#aba7a5]">MAIN MENU ({option.toUpperCase()})</p>
      </div>
      <div className="px-5">
        {option === "experience" && <SideNavLinks link={experienceLinks} />}
        {option === "learn" && <SideNavLinks link={learnLinks} />}
        {option === "go" && <SideNavLinks link={goLinks} />}
      </div>
    </div>
  );
}
