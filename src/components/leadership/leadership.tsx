import Image from "next/image";
import Link from "next/link";

export default function Leadership () {
  return (
    <section className="relative h-screen xs:max-md:h-[80vh] w-full skeleton">
      <div className="relative size-full">
        <div className="absolute z-10 size-full bg-gradient-to-l from-stone-950"></div>
        <Image
          fill={true}
          src="/home/leadership.jpeg"
          alt="background image"
          className="object-cover"
        />
      </div>
      <div className="absolute z-10 top-0 w-1/3 xs:max-md:w-[85%] h-full right-36 xs:max-md:right-5 flex flex-col justify-center text-right space-y-5 xs:max-md:space-y-3">
        <h2 className="text-white tracking-wider text-xl xs:max-md:text-base">
          LEADERSHIP
        </h2>
        <p className="text-white text-2xl font-semibold xs:max-md:text-2xl">
          Alex & Leah Abiola
        </p>
        <div>
          <p className="text-[#aba7a5] text-base leading-8 xs:max-md:text-base">
            {" "}
            Alex and Leah served as Superintendent of the anglophone West
            African nations where they focus on ministerial training, leadership
            empowerment, and medical assistance and currently serving as the
            Africa Project Coordinator.
          </p>
          <p className="text-white mt-3 text-base xs:max-md:text-base tracking-wider">
            {" "}
            FULL GOSPEL CHURCH OF GOD FORMER NATIONAL OVERSEA (Current African project cordinator)
          </p>
        </div>
        <div>
          <Link
            href="/leadership"
            className="px-8 xs:max-md:px-5 py-3 xs:max-md:py-2 border-2 border-[#d3b975] hover:border-white text-slate-300 hover:text-gray-800 rounded-full inline-block mt-5 xs:max-md:mt-2 text-xl xs:max-md:text-base hover:bg-white transition-all"
          >
            MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
