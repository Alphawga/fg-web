import Image from "next/image";
import Link from "next/link";

export default function StayUpdated () {
  return (
    <section className="relative h-[90vh] xs:max-md:h-[60vh] w-full bg-red-400">
      <div className="relative size-full">
        <div className="absolute z-10 size-full bg-gradient-to-r from-stone-950"></div>
        <Image
          fill={true}
          src="/about/stay-updated.jpg"
          alt="background image"
          className="object-cover"
        />
      </div>
      <div className="absolute z-10 top-0 w-1/3 xs:max-md:w-[80%] h-full left-36 xs:max-md:left-5 xs:max-md:right-10 flex flex-col justify-center text-left space-y-5 xs:max-md:space-y-3">
        <h3 className=" text-white tracking-wider text-xl xs:max-md:text-base">
          STAY UPDATED
        </h3>
        <h2 className="text-[#ABA7A5] text-4xl font-semibold xs:max-md:text-xl">
          Midweek Email
        </h2>
        <div>
          <p className="text-[#aba7a5] text-base leading-8 xs:max-md:text-slate-100">
            {" "}
            Sign up and learn about what’s going on around River Valley and details about our upcoming series!
          </p>
        </div>

        <div>
          <Link
            href="/"
            className="px-8 xs:max-md:px-5 py-3 xs:max-md:py-2 border-2 border-[#d3b975] hover:border-white text-slate-300 hover:text-gray-800 rounded-full inline-block mt-2 xs:max-md:mt-2 text-xl xs:max-md:text-base hover:bg-white transition-all"
          >
            STAY UPDATED
          </Link>
        </div>
      </div>
    </section>
  );
}
