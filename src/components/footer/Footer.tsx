"use client";

import useLocationsStore from "@/store/locations.store";
import { Facebook, Instagram, Mail, Twitter, YoutubeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ArrowRight () {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={4}
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

export default function Home () {
  const locations = useLocationsStore((state) => state.locationsData);

  return (
    <footer className="bg-[#161415] text-white">
      <div className="w-[80%] xs:max-md:w-[90%] mx-auto ">
        <div className="flex xs:max-md:flex-col xs:max-md:gap-20 items-center xs:max-md:items-start py-20 border-b border-[#ABA7A5] border-opacity-20">
          <div className="w-[30%] xs:max-md:w-full">
            <div className="relative size-28 xs:max-md:size-24">
              <Image
                fill={true}
                src="/church-logo.png"
                alt="Full Gospel Church Logo."
              />
            </div>
            <h2 className="font-medium tracking-wide text-2xl xs:max-md:text-2xl">
              FULL GOSPEL <br />
              CHURCH OF GOD
            </h2>
            <div className="mt-10 xs:max-md:mt-5 space-y-8 xs:max-md:space-y-4">
              <h3 className="font-medium tracking-widest">HEADQUARTERS</h3>
              <p className=" text-[#ABA7A5] font-medium">
                <Link href="/" className="hover:underline">
                  {" "}
                  No 84 Ikot Ekpene Road Abak
                  <br />
                  Akwa Ibom state{" "}
                </Link>
              </p>
              <p className=" text-[#ABA7A5] font-medium">
                <Link href="/" className="hover:underline">
                  (+234) 813-883-2513
                </Link>
              </p>
              <Link
                href="/"
                className="group flex w-2/3 items-center gap-5  xs:max-md:gap-3 text-lg  xs:max-md:text-base h-5 text-[#aba7a5] font-medium"
              >
                <p className="">CARE REQUEST</p>
                <div className="relative h-full aspect-square mt-1">
                  <div className="absolute top-0 group-hover:left-1 slow-transition text-[#d3b975]">
                    <ArrowRight />
                  </div>
                  <div className="absolute top-0 group-hover:-left-1 slow-transition text-[#d3b975]">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="w-[70%] xs:max-md:w-full flex xs:max-md:flex-wrap xs:max-md:justify-between xs:max-md:gap-[3%] h-full">
            <div className="w-[25%] xs:max-md:w-[45%]">
              <h3 className="font-medium tracking-widest">
                FULL GOSPEL
                <br />
                CHURCH OF GOD
              </h3>
              <ul className="text-[#aba7a5] mt-5 space-y-5 flex flex-col items-start">
                {[
                  { text: "About", path: "/about" },
                  { text: "Leadership", path: "/leadership" },
                  { text: "New Here?", path: "/" },
                  { text: "Give", path: "/" },
                  { text: "Login", path: "/" },
                  { text: "Impact", path: "/" },
                ].map((links) => (
                  <li key={links.text} className="relative inline-block">
                    <Link href={links.path} className="grow-hover">
                      {links.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[25%] xs:max-md:w-[45%]">
              <h3 className="font-medium tracking-widest">RESOURCES</h3>
              <ul className="text-[#aba7a5] mt-5 space-y-5  flex flex-col items-start">
                {[
                  {
                    text: "Articles",
                    path: "https://www.evangelmagazine.com/",
                  },
                  { text: "Events", path: "/" },
                  { text: "Media Inquiries", path: "/" },
                  { text: "Network", path: "/" },
                  { text: "Careers", path: "/" },
                  { text: "Prayer Request", path: "/prayer-request" },
                ].map((links) => (
                  <li key={links.text} className="relative inline-block">
                    <Link href={links.path} className="grow-hover">
                      {links.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[50%] xs:max-md:w-full xs:max-md:mt-20 h-[60vh] overflow-y-hidden overflow-x-auto">
              <h3 className="font-medium tracking-widest">LOCATIONS</h3>
              <ul className="text-[#aba7a5] mt-5 gap-x-10 gap-y-5 flex flex-col items-start flex-wrap h-full bg-green-40">
                {locations?.map((location) => {
                  return (
                    <li key={location.id} className="relative inline-block">
                      {" "}
                      <Link
                        href={`/location/${location.name}`}
                        className="block text-[#aba7a5] pb-2 xs:max-md:text-lg grow-hover "
                      >
                        {location.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="py-14 xs:max-md:py-10 flex xs:max-md:flex-col xs:max-md:gap-5 items-center justify-between text-sm text-[#aba7a5] font-medium">
          <div className="flex items-center gap-5">
            {[
              { path: "/mail", icon: <Mail className="socials-style" /> },
              {
                path: "/facebook",
                icon: <Facebook className="socials-style" />,
              },
              { path: "/twitter", icon: <Twitter className="socials-style" /> },
              {
                path: "/instagram",
                icon: <Instagram className="socials-style" />,
              },
              {
                path: "https://www.youtube.com/@COGHQ",
                icon: <YoutubeIcon className="socials-style" />,
              },
            ].map((socials) => {
              return (
                <div
                  key={socials.path}
                  className="size-7 xs:max-md:size-8 hover:scale-125 transition-all"
                >
                  <Link href={socials.path}>{socials.icon}</Link>
                </div>
              );
            })}
          </div>
          <div>
            <p className="text-center">
              &#169; {new Date().getFullYear()} Full Gospel Church Of God. All
              Rights Reserved.
            </p>
          </div>
          <div className="flex gap-2">
            <p>
              <Link href="/">Privacy Policy</Link>
            </p>
            <p>|</p>
            <p>
              <Link href="/">Terms and Conditions</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
