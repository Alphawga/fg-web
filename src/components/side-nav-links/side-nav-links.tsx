"use client";

import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import useMobileSideNavBarStore from "@/store/mobile-side-nav.store";
import useDesktopSecSideNavBarStore from "@/store/desktop-sec-side-nav.store";

type Props = {
  keyword: string;
  subLinks: { text: string; path: string; extend: boolean }[];
};
type LinksProps = {
  link: Props[];
};

export default function SideNavLinks ({ link }: LinksProps) {
  const pathname = usePathname();
  const updateOption = useMobileSideNavBarStore((state) => state.setOption);
  const updateExtend = useMobileSideNavBarStore((state) => state.setExtend);

  const updateOpenSideNav = useMobileSideNavBarStore(
    (state) => state.setOpenSideNav
  );

  const updateDesktopSecSideNavBar = useDesktopSecSideNavBarStore(
    (state) => state.setSecSideNav
  );

  function handleMenuClose () {
    updateOption("");
    updateOpenSideNav(false);
  }

  function handleExtend (text: string) {
    updateExtend(text);
  }

  return (
    <div className="relative top-0 fade-in-down overflow-scroll h-full no-scrollbar">
      {link.map((items) => {
        return (
          <div
            key={items.keyword}
            className="space-y-5 pb-5 my-5 border-b-[.5px] border-slate-500 last:border-none"
          >
            <p className="text-white font-bold tracking-wide text-sm xs:max-md:text-sm">
              {items.keyword}
            </p>
            <nav>
              <ul className="space-y-3">
                {items.subLinks.map((links) => {
                  return links.extend ? (
                    <li
                      onMouseEnter={() => updateDesktopSecSideNavBar(links.text)}
                      // onMouseLeave={() => updateDesktopSecSideNavBar("")}
                      onClick={() => handleExtend(links.text)}
                      key={links.text}
                      className={
                        "flex justify-between text-base xs:max-md:text-base font-medium xs:max-md:font-normal transition-all text-[#aba7a5] hover:text-white cursor-pointer"
                      }
                    >
                      <p>{links.text}</p>
                      {links.extend && (
                        <div className="size-5 flex items-center justify-center">
                          <ChevronRightIcon />
                        </div>
                      )}
                    </li>
                  ) : (
                    <li
                      onClick={handleMenuClose}
                      onMouseEnter={() => updateDesktopSecSideNavBar("")}
                      key={links.text}
                      className={`${
                        pathname === links.path
                          ? "text-orange-500 hover:text-yellow-500"
                          : "text-[#aba7a5] hover:text-white "
                      } flex justify-between  text-base xs:max-md:text-base font-medium  transition-all`}
                    >
                      <Link href={links.path} target="_blank">
                        {links.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        );
      })}
    </div>
  );
}
