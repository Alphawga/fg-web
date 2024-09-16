"use client";

import useShowHeaderStore from "@/store/show-header.store";
import { useState } from "react";
import DesktopSideNavBar from "@/components/side-nav-bar/desktop-side-nav-bar";
import Link from "next/link";
import useStyleHeaderStore from "@/store/style-header.store";
import useScrollPositionStore from "@/store/scroll-position.store";
import Image from "next/image";
import useDesktopSecSideNavBarStore from "@/store/desktop-sec-side-nav.store";
import DesktopSecSideNavBar from "@/components/side-nav-bar/desktop-sec-side-nav-bar";
import useLocationsStore from "@/store/locations.store";

export default function DesktopHeader () {
  const [option, setOption] = useState("");
  const headerState = useShowHeaderStore((state) => state.headerState);
  const headerStyle = useStyleHeaderStore((state) => state.headerStyle);
  const scrollPosition = useScrollPositionStore((state) => state.scrollPosition);
  const desktopSecSideNavBar = useDesktopSecSideNavBarStore(state => state.secSideNav);
  const locations = useLocationsStore(state => state.locations);

  return (
    <header
      className={`xs:max-md:hidden fixed ${
        headerState === "show" ? "top-0" : "-top-32"
      } ${headerStyle} slow-transition z-20 w-full py-8 px-10 flex justify-between text-[#aba7a5]`}
    >
      <div
        className={`xs:max-md:hidden fixed z-20 top-80 ${
          headerState === "show" && scrollPosition >= -250
            ? "-left-24"
            : "-left-40"
        } slow-transition -rotate-90 text-white font-medium tracking-widest`}
      >
        FULL GOSPEL CHURCH OF GOD
      </div>
      <div className="flex items-center gap-10">
        {/* LOGO */}
        <div>
          <Link href="/">
            <div className="relative z-10 size-14">
              <Image fill={true} src="/church-logo.png" alt="church logo" />
            </div>
          </Link>
        </div>

        <div className="group flex items-center">
          <div>
            <DesktopSideNavBar option={option} setOption={setOption} />
            {desktopSecSideNavBar !== "" && <DesktopSecSideNavBar /> }
          </div>

          <nav className="">
            <ul className="relative flex items-center gap-5 font-medium ">
              {["EXPERIENCE", "LEARN", "GO"].map((item) => (
                <li
                  key={item}
                  onMouseEnter={() => setOption(item.toLowerCase())}
                  onMouseLeave={() => setOption("")}
                  className={`${option === item.toLowerCase() ? "group-hover:text-white font-bold underline" : "group-hover:text-[#aba7a5] font-normal no-underline"}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex items-center gap-28">
        <div className="relative flex items-center gap-3">
          <button className="relative group font-medium">
            LOCATIONS
            <div className="hidden group-hover:flex absolute left-0 top-full max-h-[80vh]  w-80 pt-5 overflow-scroll  no-scrollbar  justify-start">
              <ul className="relative py-2 inline-block">
                {locations.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-2 bg-[#161415] hover:bg-black hover:bg-opacity-5 hover:backdrop-blur-sm cursor-pointer text-left"
                  >
                    <Link href={`/location/${item}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </button>
          <div className="border-x-[5px] border-t-4 border-x-transparent border-t-[#d3b975]"></div>
        </div>
        <nav>
          <ul className="flex items-center gap-10 font-medium">
            <li className="relative">
              <Link href="https://www.cogwm.org/give/" className="grow-hover">
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
    </header>
  );
}
