
export default function ProjectHero () {
  return (
    <div id="project-hero" className="relative h-screen xs:max-md:h-[70vh] w-full bg-[url('/projects/africa-project.jpg')] bg-cover zoom-out-150 bg-center">
      <div className="absolute size-full z-10 bg-gradient-to-t from-black from-[20%] opacity-80"></div>
      <div className="absolute bottom-52 xs:max-md:bottom-5 left-52 z-10 text-white xs:max-md:left-5 space-y-8 xs:max-md:space-y-2">
        <p className="text-white tracking-wider text-xl xs:max-md:text-base">
          AFRICA PROJECT
        </p>
        <p className="text-white text-[3.5rem] xs:max-md:text-3xl">
          Transforming Lives Across Africa
        </p>
      </div>
    </div>
  );
}
