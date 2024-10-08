import { trpc } from "@/app/_providers/trpc-provider";
import Image from "next/image";
import Link from "next/link";

export default function WelcomeHome () {
  const ogranizaitonData = trpc.getOrganizationByName.useQuery({ name: "full-gospel" });

  return (
    <section className="relative h-screen xs:max-md:h-[80vh] w-full bg-red-40">
      <div className="relative w-full h-full">
        <div className="absolute z-10 w-full h-full bg-gradient-to-r from-stone-950"></div>

        <Image
          layout="fill"
          src="/harvest.png"
          alt="background image"
          className="object-cover object-center"
        />

      </div>
      <div className="absolute top-0 z-10 w-full h-full bg-gradient-to-tr from-black from-[30%] opacity-5"></div>
      <div className="absolute z-10 top-0 w-1/3 xs:max-md:w-full h-full left-36 xs:max-md:left-5 flex flex-col justify-center space-y-5 xs:max-md:space-y-3">
        <h2 className="text-[#ABA7A5] font-semibold tracking-wider text-3xl xs:max-md:text-xl">
          WELCOME TO FULL GOSPEL CHURCH OF GOD
        </h2>

        <div>
          <p className="text-slate-200 text-base leading-8 xs:max-md:text-base xs:max-md:pr-16">
            {ogranizaitonData.data?.about_us}
            Welcome Home is your first step at Full Gospel Church Of God. You
            were created for a purpose, and we want to help you discover that
            purpose! You will build community, understand how God made you, and
            dive deeper into your walk with Jesus. We can&apos;t wait to meet
            you!
          </p>
        </div>
        <div>
          <Link
            href="/about"
            className="px-8 xs:max-md:px-5 py-3 xs:max-md:py-2 border-2 border-[#d3b975] hover:border-white text-slate-300 hover:text-gray-800 rounded-full inline-block mt-5 xs:max-md:mt-2 text-xl xs:max-md:text-base hover:bg-white transition-all"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
