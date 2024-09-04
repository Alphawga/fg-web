import BackgroundVideo from "./components/background-video";
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

export default function HeroSection () {
  return (
    <section id="home-hero" className="relative h-screen xs:max-md:h-[80vh] w-full">
      <BackgroundVideo />

      <div className="absolute text-white bottom-14 xs:max-md:bottom-5 left-32 xs:max-md:left-5 space-y-3  xs:max-md:space-y-2">
        <p className="tracking-widest font-medium  xs:max-md:text-xs">
          TODAY - SOAP:
        </p>
        <p className="font-semibold  xs:max-md:text-sm">Deuteronomy 9-10</p>
        <Link
          href="/"
          className="group flex items-center gap-5  xs:max-md:gap-3 text-lg  xs:max-md:text-base h-5 text-[#aba7a5] font-medium"
        >
          <p>MORE</p>
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
    </section>
  );
}
