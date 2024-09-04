"use client";

import useMobileSideNavBarStore from "@/store/mobile-side-nav.store";
import useShowHeaderStore from "@/store/show-header.store";

export default function Header () {
  const option = useMobileSideNavBarStore((state) => state.option);
  const updateOption = useMobileSideNavBarStore((state) => state.setOption);
  const headerState = useShowHeaderStore((state) => state.headerState);

  return (
    <div className={`fixed ${headerState === "show" ? "top-0" : "-top-32"} transition-all z-20 w-full p-14 flex justify-between text-[#aba7a5]`}>
      <div className="flex items-center gap-10">
        <div className="relative z-10 size-10 bg-yellow-500"></div>
        <nav>
          <div className="group flex items-center gap-5">
            <div onMouseEnter={() => updateOption(option)} className=" hidden group-hover:block absolute top-0 left-0 h-screen w-1/3 bg-[#231f20] animate-accordion-left pl-[130px] pr-10 pt-28">

            </div>
            <nav>
              <ul className="flex items-center gap-5 font-medium">
                <li onMouseEnter={() => updateOption("experience")} onMouseLeave={() => updateOption("")} className="relative z-10 hover:text-white"><button onClick={() => updateOption("experience")}>EXPERIENCE</button></li>
                <li onMouseEnter={() => updateOption("learn")} onMouseLeave={() => updateOption("")} className="relative z-10 hover:text-white">LEARN</li>
                <li onMouseEnter={() => updateOption("go")} onMouseLeave={() => updateOption("")} className="relative z-10 hover:text-white">GO</li>
              </ul>
            </nav>
          </div>
        </nav>
      </div>
      <div className="flex items-center gap-28">
        <div>
          <button>LOCATIONS</button>
        </div>
        <nav>
          <ul className="flex items-center gap-10 font-medium">
            <li className="relative"><a className="grow-hover">GIVE</a></li>
            <li className="relative"><a className="grow-hover">LOGIN</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
