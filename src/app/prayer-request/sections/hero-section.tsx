import Image from "next/image";

export default function HeroSection () {
  return (
    <section
      id="prayer-request-hero"
      className="relative h-[calc(100vh_+_40px)] xs:max-md:h-[calc(80vh_+_40px)] w-full -mt-10 overflow-hidden"
    >
      <div className="absolute size-full ">
        <Image
          fill={true}
          src="/prayer-request/prayer-banner.jpeg"
          alt="prayer request hero section banner image"
          className="object-cover"
        />
      </div>
      <div className="absolute size-full bg-gradient-to-t from-stone-950 from-[50%] to-black opacity-60"></div>
      <div className="absolute bottom-10 flex items-center left-60 xs:max-md:left-5 size-full space-y-10 xs:max-md:space-y-1">
        <div className="absolute top-[50vh] xs:max-md:top-80 space-y-5 xs:max-md:space-y-2 w-full">
          <div className="text-white space-y-5">
            <h2 className="text-lg xs:max-md:text-base xs:max-md:tracking-normal tracking-widest">
              WE BELIEVE IN THE POWER OF PRAYER
            </h2>
            <h1 className="text-5xl xs:max-md:text-2xl">Prayer Request</h1>
          </div>
          <div className="xs:max-md:pl-0 text-[#ABA5A7] w-full">
            <h3 className="w-[65%] xs:max-md:w-[90%] font-medium xs:max-md:font-normal text-xl xs:max-md:text-base leading-9 xs:max-md:leading-6">
              The Prayer Ministry is made up of two areas – the Prayer Team who
              rely on the power of praying for others and the Prayer Partners
              who will pray with individuals after each of the weekend services.
              Both teams consist of people who have a passion for prayer and
              pray diligently, specifically for the needs within and outside the
              church, locally and globally.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
