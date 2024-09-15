"use client";

import locations from "@/contents/locations";
import Link from "next/link";

export default function ScrollableLocation () {
  return (
    <section className="relative z-10 w-full bg-opacity-90 flex xs:max-md:flex-col">
      <div
        id="leadership"
        className="absolute size-full -z-10 bg-red-400"
      ></div>
      <div className="absolute -z-10 bg-black opacity-80 size-full"></div>
      <div className="absolute -z-10 bg-gradient-to-tl from-black from-[20%] opacity-70 size-full"></div>

      <div className="sticky xs:max-md:z-10 top-[40vh] xs:max-md:top-0 w-1/2 xs:max-md:w-full h-40 flex items-center px-32 xs:max-md:px-5 my-40 xs:max-md:my-0 xs:max-md:pt-52 xs:max-md:pb-24 xs:max-md:bg-black xs:max-md:bg-opacity-50 xs:max-md:backdrop-blur-md">
        <div>
          <p className="text-[5rem] xs:max-md:text-5xl md:text-[4rem] font-light text-[#aba7a5]">
            Locations
          </p>
          <h2 className="mt-10 xs:max-md:mt-5 text-2xl xs:max-md:text-xl font-medium text-[#aba7a5]">
            <span className="text-white"> We are</span>
            <span className="text-[#d3b975]"> one church </span> with multiple
            locations
          </h2>
        </div>
      </div>

      <div className="w-1/2 xs:max-md:mx-auto h-full pb-40 pt-24">
        {locations.map((state) => (
          <div key={state} className="my-16 xs:max-md:my-10">
            <p className="relative inline-block font-light">
              <Link
                href={`/location/${state}`}
                className="block text-[#aba7a5] pb-2 text-5xl xs:max-md:text-4xl grow-hover "
              >
                {state}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
