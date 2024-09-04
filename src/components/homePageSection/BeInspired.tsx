"use client";

import {
  inspireWatch,
  inspireListen,
  inspireRead,
  inspireWorship,
} from "@/contents/be-inspired";
import Image from "next/image";
import { useState } from "react";
import ContentSection from "@/components/homePageSection/ContentSection";

export default function BeInspired () {
  const [inspireCategory, setInspireCategory] = useState("WATCH");

  function handleInspireChange (param: "WATCH" | "LISTEN" | "READ" | "WORSHIP") {
    setInspireCategory(param);
  }

  return (
    <section className="bg-[#231f20] text-white w-full py-24">
      <div className="w-[80%] xs:max-md:w-[90%] mx-auto">
        <h3 className="text-xl tracking-wider font-medium">BE INSPIRED</h3>
        <div className="flex xs:max-md:flex-col-reverse xs:max-md:w-full gap-10 mt-10">
          <div className="w-[30%] xs:max-md:w-full xs:max-md:flex xs:max-md:border xs:max-md:border-[#403d3e] bg-red-40">
            {[
              { text: "WATCH", icon: "/home/play-alt.svg" },
              { text: "LISTEN", icon: "/home/headphones.svg" },
              { text: "READ", icon: "/home/book.svg" },
              { text: "WORSHIP", icon: "/home/music.svg" },
            ].map((category) => {
              return (
                <div key={category.text} className="w-full xs:max-md:w-1/4">
                  <button
                    onClick={() =>
                      handleInspireChange(
                        category.text as "WATCH" | "LISTEN" | "READ" | "WORSHIP"
                      )
                    }
                    className={`${
                      inspireCategory === category.text
                        ? "bg-[rgba(153,153,153,0.08)] text-white"
                        : "text-[#aba7a5]"
                    }  group px-8 xs:max-md:p-5 py-10 border-y xs:max-md:border-x border-[#403d3e] hover:bg-[rgba(153,153,153,0.08)] flex xs:max-md:flex-col-reverse xs:max-md:gap-2 w-full items-center justify-between text-2xl xs:max-md:text-xs font-medium tracking-wider`}
                  >
                    <p>{category.text}</p>
                    <div className="relative size-7 xs:max-md:size-6 group-hover:scale-110  transition-all">
                      {!(inspireCategory === category.text) && (
                        <div className="absolute z-10 size-full bg-[#231f20] group-hover:bg-[rgba(153,153,153,0.08)] group-hover:opacity-0 opacity-50"></div>
                      )}
                      <Image
                        fill={true}
                        src={category.icon}
                        alt={category.text}
                        className="object-cover"
                      />
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          <div className=" w-[70%] xs:max-md:w-full rounded-3xl xs:max-md:rounded-lg overflow-hidden xs:max-md:h-[50vh] skeleton">
            {inspireCategory === "WATCH" && <ContentSection contentList={inspireWatch} category={inspireCategory} /> }
            {inspireCategory === "LISTEN" && <ContentSection contentList={inspireListen} category={inspireCategory} /> }
            {inspireCategory === "READ" && <ContentSection contentList={inspireRead} category={inspireCategory} /> }
            {inspireCategory === "WORSHIP" && <ContentSection contentList={inspireWorship} category={inspireCategory} /> }
          </div>
        </div>
      </div>
    </section>
  );
}
