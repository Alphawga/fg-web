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

function LatestSermonsComponent ({
  link,
  image,
  title,
}: {
  link: string;
  image: string;
  title: string;
}) {
  return (
    <div className="group space-y-1">
      <Link
        href={link}
        className="block w-full aspect-video skeleton rounded-md overflow-hidden"
      >
        <figure className="size-full relative">
          <div className="absolute z-10 left-5 bottom-5 size-10 bg-[#d3b975] rounded-full flex items-center justify-center">
            <div className="border-l-[.8rem] border-y-[.5rem] border-l-black border-y-transparent ml-[.3rem]"></div>
          </div>
          <div className=""></div>
          <Image fill={true} src={image} alt={image} className="object-cover" />
        </figure>
      </Link>
      <Link
        href={link}
        className="block group-hover:underline group-hover:text-white"
      >
        {title}
      </Link>
    </div>
  );
}

export default function LatestSermons () {
  return (
    <div className="relative h-full overflow-scroll no-scrollbar pb-40">
      <div className="fixed z-20 left-0 bottom-0 w-[90%]">
        <Link
          href="https://churchofgod.org/category"
          className="group w-full h-14 bg-[#231f20] shadow-lg shadow-[#1c1c1c] flex items-center gap-2 px-5 cursor-pointer"
        >
          <p className="text-[#aba7a5] hover:text-white uppercase">
            More Sermons
          </p>
          <div className="text-[#d3b975] inline-block group-hover:translate-x-2">
            <ArrowRight />
          </div>
        </Link>
      </div>
      <h3 className="text-white font-medium tracking-wider">FEATURED</h3>
      <div className="text-[#ABA7A5] mt-5 space-y-10">
        <LatestSermonsComponent link="https://vimeo.com/394016683" image="/latest-sermons/sermon1.png" title="Voices of Heritage: Annette Watson" />
        <LatestSermonsComponent link="https://vimeo.com/333338494" image="/latest-sermons/sermon2.png" title="Vital Issues 10 – The Vital Initiative Network" />
        <LatestSermonsComponent link="https://vimeo.com/845943107" image="/latest-sermons/sermon3.png" title="Accelerated Leader: Unprecedented Change" />
      </div>
    </div>
  );
}
