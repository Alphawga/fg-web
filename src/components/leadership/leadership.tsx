import Image from "next/image";
import Link from "next/link";

export default function Leadership () {
  return (
    <section className="relative h-screen xs:max-md:h-[80vh] w-full skeleton">
      <div className="relative size-full">
        <div className="absolute z-10 size-full bg-gradient-to-l from-stone-950"></div>
        <Image
          fill={true}
          src="/IMG_5858.JPG"
          alt="Bishop Dr. Uwem Noah Joseph and Rev. (Mrs.) Rose Uwem Noah"
          className="object-cover"
        />
      </div>
      <div className="absolute z-10 top-0 w-1/3 xs:max-md:w-[85%] h-full right-36 xs:max-md:right-5 flex flex-col justify-center text-right space-y-5 xs:max-md:space-y-3">
        <h2 className="text-white tracking-wider text-xl xs:max-md:text-base">
          LEADERSHIP
        </h2>
        <p className="text-white text-2xl font-semibold xs:max-md:text-2xl">
          Bishop Dr. Uwem Noah Joseph & Rev. (Mrs.) Rose Uwem Noah
        </p>
        <div>
          <p className="text-[#aba7a5] text-base leading-8 xs:max-md:text-base">
            Bishop Dr. Uwem Noah Joseph, born on February 24, 1972, has served in various capacities within the Full Gospel Church of God. His wife, Rev. (Mrs.) Rose Uwem Noah, born on October 21, 1987, serves as the National Women President. Together, they lead with vision, dedication, and a commitment to spiritual growth and community service.
          </p>
          <p className="text-white mt-3 text-base xs:max-md:text-base tracking-wider">
            FULL GOSPEL CHURCH OF GOD NATIONAL OVERSEER AND FIRST LADY (2024 - PRESENT)
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
