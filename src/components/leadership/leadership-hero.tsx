"use client";

export default function LeadershipHero () {
  return (
    <div id="leadership-hero" className="relative h-screen w-full bg-[url('/leadership/couple-pastor.jpg')] bg-cover zoom-out-150 bg-center">
      <div className="absolute size-full z-10 bg-gradient-to-t from-black from-[20%] opacity-80"></div>
      <div className="absolute bottom-52 left-52 z-10 text-white xs:max-md:left-5 space-y-8  xs:max-md:space-y-2">
        <p className="text-white tracking-wider text-xl xs:max-md:text-base">
          LEADERSHIP
        </p>
        <p className="text-white text-[3.5rem] xs:max-md:text-4xl">
          Pastor Rob & Becca Ketterling
        </p>
      </div>
    </div>
  );
}
