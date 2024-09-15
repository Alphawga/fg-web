import useDesktopSecSideNavBarStore from "@/store/desktop-sec-side-nav.store";
import InPerson from "@/components/mobile-extend-sidebar/InPerson";
import Online from "@/components/mobile-extend-sidebar/Online";
import LatestSermons from "@/components/mobile-extend-sidebar/LatestSermons";

export default function DesktopSecSideNavBar () {
  const secSideNav = useDesktopSecSideNavBarStore((state) => state.secSideNav);

  const updateDesktopSecSideNavBar = useDesktopSecSideNavBarStore(
    (state) => state.setSecSideNav
  );

  return (
    <div onMouseLeave={() => updateDesktopSecSideNavBar("")} className="absolute -z-10 bg-[#181616] top-0 bottom-0 left-[33%] h-screen w-1/3 animate-accordion-left pt-32">
      <div className="h-full w-full overflow-scroll no-scrollbar px-10">
        {secSideNav.toUpperCase() === "IN PERSON" && <InPerson />}
        {secSideNav.toUpperCase() === "ONLINE" && <Online />}
        {secSideNav.toUpperCase() === "LATEST SERMONS" && <LatestSermons />}
      </div>

    </div>
  );
}
