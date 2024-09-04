"use client";

import beliefStatement from "@/contents/belief-statement";
import scriptures from "@/contents/value-statement";
import visionStatements from "@/contents/vision-statement";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function Mission () {
  const [expand, setExpand] = useState("");

  return (
    <section
      onClick={() => setExpand("")}
      className="bg-[#231f20] w-full py-20 xs:max-md:py-10"
    >
      <div className="w-[65%] xs:max-md:w-[90%] mx-auto">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpand("Mission");
          }}
          className={`group flex flex-col items-start ${
            expand === "Mission"
              ? "h-auto"
              : "h-28 xs:max-md:h-16 overflow-hidden"
          } slow-transition-mission w-full px-5 xs:max-md:px-2 border-t-2 last:border-y-2 border-[#aba7a5] border-opacity-30 `}
        >
          <div
            className={
              "flex w-full h-28 xs:max-md:h-16 items-center justify-between slow-transition-mission bg-yellow-40"
            }
          >
            <h3 className="text-3xl xs:max-md:text-xl text-[#aba7a5]">Mission</h3>
            <div className="size-10 xs:max-md:size-8 rounded-full group-hover:scale-110 slow-transition-mission flex items-center justify-center text-[#ABA7A5] border-2 border-[#ABA7A5]">
              { expand === "Mission" ? <Minus /> : <Plus />  }
            </div>
          </div>
          <p
            className={`${
              expand === "Mission" ? "block py-5" : "hidden"
            } slow-transition-mission text-left text-stone-500 bg-red-40`}
          >
            The mission of the Church of God is to communicate the full gospel
            of Jesus Christ (Matthew 28:19, 20) in the Spirit and power of
            Pentecost (Acts 2:1-4, 6, 13-18) (71st A., 2006, p. 44).
          </p>
        </button>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpand("Vision");
          }}
          className={`group flex flex-col items-start ${
            expand === "Vision"
              ? "h-auto"
              : "h-28 xs:max-md:h-16 overflow-hidden"
          } slow-transition-mission w-full px-5 xs:max-md:px-2 border-t-2 last:border-y-2 border-[#aba7a5] border-opacity-30 `}
        >
          <div
            className={
              "flex w-full h-28 xs:max-md:h-16 items-center justify-between slow-transition-mission bg-yellow-40"
            }
          >
            <h3 className="text-3xl xs:max-md:text-xl text-[#aba7a5]">Vision</h3>
            <div className="size-10 xs:max-md:size-8 rounded-full group-hover:scale-110 slow-transition-mission flex items-center justify-center text-[#ABA7A5] border-2 border-[#ABA7A5]">
              { expand === "Vision" ? <Minus /> : <Plus />  }
            </div>
          </div>
          <div
            className={`${
              expand === "Vision" ? "block py-5" : "hidden"
            } slow-transition-mission text-left text-stone-500 bg-red-40`}
          >
            <p>
              Our vision arises from our understanding of what the sovereign God
              purposes to do for and through His church. The Great Commission
              remains our mandate from Christ.
            </p>
            <p className="text-white mt-5 mb-2"> The Church of God is to be</p>

            <ol className="list-decimal list-inside space-y-2">
              {visionStatements.map((statement) => (
                <li key={statement} className=" marker:text-slate-300">
                  {statement}
                </li>
              ))}
            </ol>
          </div>
        </button>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpand("Beliefs");
          }}
          className={`group flex flex-col items-start ${
            expand === "Beliefs"
              ? "h-auto"
              : "h-28 xs:max-md:h-16 overflow-hidden"
          } slow-transition-mission w-full px-5 xs:max-md:px-2 border-t-2 last:border-y-2 border-[#aba7a5] border-opacity-30 `}
        >
          <div
            className={
              "flex w-full h-28 xs:max-md:h-16 items-center justify-between slow-transition-mission bg-yellow-40"
            }
          >
            <h3 className="text-3xl xs:max-md:text-xl text-[#aba7a5]">Declaration of Faith</h3>
            <div className="size-10 xs:max-md:size-8 rounded-full group-hover:scale-110 slow-transition-mission flex items-center justify-center text-[#ABA7A5] border-2 border-[#ABA7A5]">
              { expand === "Beliefs" ? <Minus /> : <Plus />  }
            </div>
          </div>
          <div
            className={`${
              expand === "Beliefs" ? "block py-5" : "hidden"
            } slow-transition-mission text-left text-white`}
          >
            {expand === "Beliefs" && <div className="w-[70%] mx-auto aspect-video skeleton">
              <video className="size-full object-cover" autoPlay loop controls>
                <source src="/about/we-belief.mp4" type="video/mp4" />
              </video>
            </div> }
            <div className="text-stone-500 space-y-4 mt-5">
              <p className="text-white">BELIEFS</p>
              <p>
                {" "}
                The Church of God believes the whole Bible to be completely and
                equally inspired and that it is the written Word of God. The
                Church of God has adopted the following Declaration of Faith as
                its standard and official expression of its doctrine.{" "}
              </p>
              <ol className="list-decimal list-inside space-y-2">
                {beliefStatement.map((statement) => (
                  <li key={statement} className=" marker:text-slate-300">
                    {statement}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </button>

        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpand("Values");
          }}
          className={`group flex flex-col items-start ${
            expand === "Values"
              ? "h-auto"
              : "h-28 xs:max-md:h-16 overflow-hidden"
          } slow-transition-mission w-full px-5 xs:max-md:px-2 border-t-2 last:border-y-2 border-[#aba7a5] border-opacity-30 `}
        >
          <div
            className={
              "flex w-full h-28 xs:max-md:h-16 items-center justify-between slow-transition-mission bg-yellow-40"
            }
          >
            <h3 className="text-3xl xs:max-md:text-xl text-[#aba7a5]">Doctrinal Commitment</h3>
            <div className="size-10 xs:max-md:size-8 rounded-full group-hover:scale-110 slow-transition-mission flex items-center justify-center text-[#ABA7A5] border-2 border-[#ABA7A5]">
              { expand === "Values" ? <Minus /> : <Plus />  }
            </div>
          </div>
          <div
            className={`${
              expand === "Values" ? "block py-5" : "hidden"
            } slow-transition-mission text-left text-stone-500`}
          >
            <p> The following Doctrinal Commitments represent the core beliefs of the denomination as outlined in Scripture.</p>
            <ol className=" space-y-2 mt-5 list-decimal">
              {scriptures.map((statement) => (
                <li key={statement.topic} className=" marker:text-slate-300">
                  <p className="text-white">{statement.topic}</p>
                  <p className="text-stone-400">{statement.references.map(ref => <span key={ref} className="mr-1 last-of-type:mx-0">{ref}, </span>)}</p>
                </li>
              ))}
            </ol>
          </div>
        </button>
      </div>
    </section>
  );
}
