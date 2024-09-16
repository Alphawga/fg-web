"use client";

import useMobileSideNavBarStore from "@/store/mobile-side-nav.store";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function MobileSideNavBar () {
  const updateOption = useMobileSideNavBarStore((state) => state.setOption);

  const updateOpenSideNav = useMobileSideNavBarStore(
    (state) => state.setOpenSideNav
  );

  return (
    <div className="absolute z-10 top-0 left-0 w-full h-screen flex">
      <div className="h-full w-[90%] bg-[#231f20] animate-accordion-left text-white pl-5 pr-14 pt-32">
        <nav>
          <ul className="text-[#aba7a5] space-y-8">
            <li
              onClick={() => updateOpenSideNav(false)}
              className="flex items-center justify-between text-[#aba7a5] hover:text-white cursor-pointer font-medium text-xl"
            >
              <Link href="/">HOME</Link>
            </li>
            <li
              onClick={() => updateOption("experience")}
              className="flex items-center justify-between text-[#aba7a5] hover:text-white cursor-pointer font-medium text-xl"
            >
              <p>EXPERIENCE</p>
              <div className="size-5">
                <ChevronRightIcon />
              </div>
            </li>
            <li
              onClick={() => updateOption("learn")}
              className="flex items-center justify-between text-[#aba7a5] hover:text-white cursor-pointer font-medium text-xl"
            >
              <p>LEARN</p>
              <div className="size-5">
                <ChevronRightIcon />
              </div>
            </li>
            <li
              onClick={() => updateOption("go")}
              className="flex items-center justify-between text-[#aba7a5] hover:text-white cursor-pointer font-medium text-xl"
            >
              <p>GO</p>
              <div className="size-5">
                <ChevronRightIcon />
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div onClick={() => updateOpenSideNav(false)} className="w-[10%] bg-black bg-opacity-10 backdrop-blur h-full"></div>
    </div>
  );
}
