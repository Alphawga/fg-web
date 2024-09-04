export default function HeroSection () {
  return (
    <section
      id="about-hero"
      className="relative h-[calc(100vh_+_40px)] w-full bg-[url('/about/about-banner.jpg')] bg-no-repeat bg-cover bg-center -mt-10 overflow-hidden"
    >
      <div className="absolute size-full bg-gradient-to-t from-[#231f20] from-[30%]  "></div>
      <div className="absolute bottom-10 flex items-center left-60 xs:max-md:left-5 size-full space-y-10 xs:max-md:space-y-1">
        <div className="absolute bottom-5 space-y-20 xs:max-md:space-y-5 w-full">
          <div className="text-white space-y-5">
            <h2 className="text-lg xs:max-md:text-base xs:max-md:tracking-normal tracking-widest">
              WELCOME TO FULL GOSPEL CHURCH
            </h2>
            <h1 className="text-5xl xs:max-md:text-3xl">Who We Are</h1>
          </div>
          <div className="pl-10 xs:max-md:pl-0 text-white w-full">
            <h3 className="w-[60%] xs:max-md:w-[90%] font-medium xs:max-md:font-normal text-xl xs:max-md:text-base leading-10 xs:max-md:leading-7">
              The Church of God is a movement with a reach around the globe into
              189 countries with more than 8 million members and 15 million
              constituents. Founded in 1886, it is distinctively Pentecostal
              with a mission to finish the Great Commission.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
