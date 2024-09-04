"use client";

import useShowHeaderStore from "@/store/show-header.store";
import MobileSideNavBar from "@/components/side-nav-bar/mobile-side-nav-bar";
import MobileSecSideNavBar from "@/components/side-nav-bar/mobile-sec-side-nav-bar";
import useMobileSideNavBarStore from "@/store/mobile-side-nav.store";
import Link from "next/link";
import Image from "next/image";
import MobileSideExtend from "@/components/side-nav-bar/mobile-side-extend";

export default function MobileHeader () {
  const headerState = useShowHeaderStore((state) => state.headerState);

  const updateOpenSideNav = useMobileSideNavBarStore(
    (state) => state.setOpenSideNav
  );
  const openSideNav = useMobileSideNavBarStore((state) => state.openSideNav);
  const option = useMobileSideNavBarStore((state) => state.option);
  const extend = useMobileSideNavBarStore((state) => state.extend);

  const style = {
    true: {
      first: " border-y-white border-x-transparent",
      second: "  -top-[2px] border-y-white border-x-transparent",
    },
    false: {
      first:
        " top-2 left-1 border-t-white group-hover:border-t-red-500 border-b-transparent border-x-transparent -rotate-45",
      second:
        " -top-1 right-1 border-t-white group-hover:border-t-red-500 border-b-transparent border-x-transparent rotate-45",
    },
  };

  return (
    <div
      className={`hidden xs:max-md:flex items-center justify-between fixed z-20 w-full transition-all px-2 py-4 ${
        headerState === "show" ? "top-0" : "-top-32"
      }`}
    >
      {openSideNav && <MobileSideNavBar />}
      {option !== "" && <MobileSecSideNavBar />}
      {extend !== "" && <MobileSideExtend />}

      {/* open/close menu icon */}
      <div
        onClick={() => updateOpenSideNav(!openSideNav)}
        className="relative z-10 w-[20%] flex items-center justify-start bg-red-40"
      >
        <div className="group size-10 flex flex-col items-center justify-center p-2">
          <div
            className={`${
              !openSideNav ? style.true.first : style.false.first
            } relative w-full h-3 border-2 transition-all`}
          ></div>
          <div
            className={`${
              !openSideNav ? style.true.second : style.false.second
            } relative w-full h-3 border-2 transition-all`}
          ></div>
        </div>
      </div>

      {/* LOGO */}
      <Link
        href="/"
        className="bg-red-40 w-[60%] relative h-auto flex flex-col items-center justify-center text-xs text-white"
      >
        <div className="relative size-14 mx-auto">
          <Image fill={true} src="/church-logo.png" alt="church logo" />
        </div>
        <p className="trackin">FULL GOSPEL</p>
        <p className="tracking-wider">CHURCH</p>
      </Link>

      {/* nav */}
      <nav className="w-[20%] flex justify-end bg-red-40">
        <ul className="flex items-center justify-end gap-5 font-light text-sm text-white ">
          <li className="relative">
            <Link href="/give" className="grow-hover">
              GIVE
            </Link>
          </li>
          <li className="relative">
            <Link href="/login" className="grow-hover">
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
