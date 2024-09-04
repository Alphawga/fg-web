"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Podcast () {
  const param = useParams();

  const [podcast, setPodcast] = useState({
    title: "",
    image: "",
    link: "",
  });

  const wavelist = [
    "h-7",
    "h-5",
    "h-3",
    "h-8",
    "h-2",
    "h-5",
    "h-6",
    "h-3",
    "h-7",
    "h-9",
    "h-9",
    "h-3",
    "h-6",
    "h-4",
    "h-10",
    "h-2",
    "h-8",
    "h-4",
    "h-4",
    "h-7",
    "h-6",
    "h-5",
    "h-5",
    "h-3",
    "h-3",
    "h-7",
    "h-10",
    "h-7",
    "h-3",
    "h-5",
    "h-8",
    "h-2",
    "h-6",
    "h-5",
    "h-5",
    "h-7",
    "h-3",
    "h-8",
    "h-10",
    "h-2",
    "h-5",
    "h-7",
    "h-5",
    "h-5",
    "h-7",
    "h-3",
    "h-2",
    "h-2",
    "h-4",
    "h-7",
  ];

  const inspireListen = [
    {
      title: "EPISODE NUMBER 2970",
      image: "/podcast/ola",
      link: "https://drive.google.com/file/d/1B-Pn9YEpInAyvyr7F_p1PV2Clk_UkLiT/view?usp=sharing",
    },
    {
      title: "EPISODE NUMBER 2969",
      image: "/podcast/ola",
      link: "https://drive.google.com/file/d/167vrYX2xp7Iz9NBwHZCVCVWSjBVhTW-P/view?usp=sharing",
    },
    {
      title: "EPISODE NUMBER 2968",
      image: "/podcast/ola",
      link: "https://drive.google.com/file/d/1swrBeA3Xty5f-EaU0MZJASG1rTnVtAzX/view?usp=sharing",
    },
    {
      title: "EPISODE NUMBER 2967",
      image: "/podcast/ola",
      link: "https://drive.google.com/file/d/1JPnhmgOTzdc0MjMxDByyoEpn0LQ4bA3g/view?usp=sharing",
    },
  ];

  useEffect(() => {
    setPodcast(inspireListen[parseInt(param.slug as string) - 1]);
  }, []);

  return (
    <main>
      <section className="h-screen w-full skeleton">
        <figure className="relative size-full">
          <Image
            fill={true}
            src="/podcast/fif.webp"
            alt="Forward In Faith Banner Image"
            className="object-contai"
          />
        </figure>
        <div className="absolute top-0 left-0 size-full bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center">
          <div className="relative mt-[10vh] xs:max-md:mt-0 w-1/3 xs:max-md:w-[90%] h-[80vh] xs:max-md:h-[50vh] skeleton">
            <figure className="relative size-full">
              <Image
                fill={true}
                src="/podcast/podcast.jpg"
                alt="Forward In Faith Banner Image"
                className="object-cover object-left"
              />
            </figure>
            <div className="absolute top-5 w-full text-center">
              <p className="font-bold text-white text-lg">{podcast.title}</p>
            </div>
            <div className="absolute bottom-0 w-full bg-red-40">
              <div className="flex items-end gap-[2px] overflow-hidden">
                {wavelist.slice(0).map((bar) => (
                  <div key={bar} className={`${bar} w-3 bg-white`}></div>
                ))}
              </div>
              <div className="bg-black bg-opacity-80 p-5 xs:max-md:p-3">
                <h2 className="py-3 border-b border-slate-500 text-slate-200 font-bold xs:max-md:text-sm">
                  FORWARD IN FAITH -{" "}
                  <span className="text-slate-300 font-normal">
                    {podcast.title}
                  </span>
                </h2>
                <div className="pt-5 xs:max-md:pt-3">
                  <audio controls autoPlay className="w-full">
                    {/* <source src={`${podcast.link}`} type="audio/mp3" /> */}
                    {/* <source src="https://drive.google.com/file/d/1B-Pn9YEpInAyvyr7F_p1PV2Clk_UkLiT/view?usp=drive_link" />
                    <source src="https://drive.google.com/file/d/1B-Pn9YEpInAyvyr7F_p1PV2Clk_UkLiT/view?usp=drive_link" />
                    <source src="https://drive.google.com/file/d/1B-Pn9YEpInAyvyr7F_p1PV2Clk_UkLiT/view?usp=drive_link" /> */}
                    <source src="https://docs.google.com/uc?export=download&id=1B-Pn9YEpInAyvyr7F_p1PV2Clk_UkLiT" type="audio/mp3" />

                    {/* <source src="/podcast/fif1.mp3" type="audio/mp3"/> */}

                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
