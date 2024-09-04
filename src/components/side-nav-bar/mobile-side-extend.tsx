// import SideNavLinks from "@/components/side-nav-links/side-nav-links";
import useMobileSideNavBarStore from "@/store/mobile-side-nav.store";
import InPerson from "@/components/mobile-extend-sidebar/InPerson";
import Online from "@/components/mobile-extend-sidebar/Online";
import LatestSermons from "@/components/mobile-extend-sidebar/LatestSermons";

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

export default function MobileSideExtend () {
  const extend = useMobileSideNavBarStore((state) => state.extend);
  const updateExtend = useMobileSideNavBarStore((state) => state.setExtend);

  return (
    <div className="absolute z-20 top-0 right-[10%] w-[90%] h-screen bg-[#231f20] animate-accordion-right">
      <div
        onClick={() => updateExtend("")}
        className="w-full h-14 bg-[#231f20] shadow-lg shadow-[#1c1c1c] flex items-center gap-2 px-5 cursor-pointer"
      >
        <div className="text-[#d3b975] rotate-180 inline-block">
          <ArrowRight />
        </div>
        <p className="text-[#aba7a5] uppercase">{extend}</p>
      </div>
      <div className="relative px-7 pt-7 h-full">
        {extend.toUpperCase() === "IN PERSON" && <InPerson /> }
        {extend.toUpperCase() === "ONLINE" && <Online /> }
        {extend.toUpperCase() === "LATEST SERMONS" && <LatestSermons /> }
      </div>
    </div>
  );
}
