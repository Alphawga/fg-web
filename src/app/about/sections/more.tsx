import Image from "next/image";
import Link from "next/link";

export default function More () {
  return (
    <section className="bg-[#231f20] pb-24 xs:max-md:pt-10">
      <div className="w-[80%] xs:max-md:w-[90%] mx-auto">
        <h2 className="text-xl xs:max-md:text-base text-white tracking-widest xs:max-md:tracking-normal font-medium">
          MORE ABOUT FULL GOSPEL CHURCH
        </h2>
        <div className="flex w-full xs:max-md:flex-col justify-between xs:max-md:gap-5 h-[70vh] xs:max-md:h-auto mt-10 xs:max-md:mt-3">
          {[
            {
              title: "Leadership",
              text: "Pastors Rob & Becca founded River Valley Church in an elementary school in 1995. It has since grown into a thriving church with nearly 10,000 in attendance across ten U.S. campuses and one international campus (Mbekelweni, eSwatini) with plans for further expansion in the future.",
              path: "/leadership",
              image: "/leadership/group2.JPG",
            },
            {
              title: "Church On Mission",
              text: "Pastors Rob & Becca founded River Valley Church in an elementary school in 1995. It has since grown into a thriving church with nearly 10,000 in attendance across ten U.S. campuses and one international campus (Mbekelweni, eSwatini) with plans for further expansion in the future.",
              path: "https://www.churchofgodcommunications.com/churchonmission",
              image: "/about/challenge.png",
            },
            {
              title: "Explore",
              text: "The Church of God is committed to making disciples throughout the world, obeying Christ by fulfilling the Great Commission: \\“Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you always, even unto the end of the world. Amen.” Matthew 28:19-20",
              path: "https://www.cogwm.org/explore/",
              image: "/about/explore.jpg",
            },
          ].map((content) => {
            return (
              <Link
                href={content.path}
                key={content.title}
                className="relative group w-[31%] xs:max-md:w-full h-full xs:max-md:h-[60vh] rounded-2xl overflow-hidden bg-[#161415 transition-all text-white text-xl font-medium hover:scale-[105%] xs:max-md:hover:scale-105 transition-all"
              >
                <div className="absolute z-10 size-full bg-gradient-to-tl from-black from-[60%] opacity-50"></div>
                <div className="w-full h-full bg-gradient-to-br from-gray-500 group-hover:h-[70%] transition-all">
                  <figure className="relative size-full">
                    <p className="absolute w-full left-5 bottom-5 z-10">
                      {content.title}
                    </p>
                    <Image
                      fill={true}
                      src={content.image}
                      alt={content.title}
                      className="object-cover object-top"
                    />
                  </figure>
                </div>
                <div className="relative hidden group-hover:block w-full h-auto transition-all items-end p-5">
                  <h2>{content.title}</h2>
                  <p className="line-clamp-2 text-sm">{content.text}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
