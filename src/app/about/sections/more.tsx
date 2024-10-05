import Image from "next/image";
import Link from "next/link";

export default function More () {
  return (
    <section className="bg-[#231f20] pb-24 xs:max-md:pt-10">
      <div className="w-[80%] xs:max-md:w-[90%] mx-auto">
        <h2 className="text-xl xs:max-md:text-base text-white tracking-widest xs:max-md:tracking-normal font-medium">
          MORE ABOUT FULL GOSPEL CHURCH OF GOD
        </h2>
        <div className="flex w-full xs:max-md:flex-col justify-between xs:max-md:gap-5 h-[70vh] xs:max-md:h-auto mt-10 xs:max-md:mt-3">
          {[
            {
              title: "Leadership",
              text: " Alex and Leah Abiola served as the overseers to Nigeria and Superintendents to anglophone West Africa and currently serving as the Africa Project Coordinator With a ministry that includes ministerial education, medical missions, church building family and marital counseling, substance abuse counseling, and outreach to children and poor, they have touched many lives.",
              path: "/leadership",
              image: "/leadership/group2.JPG",
            },
            {
              title: "Church On Mission",
              text: " They served as missionaries to the Republic of Ireland from December 2004 to July 2010. From 2010-2012, they were missionaries in Nigeria. From 2012 to 2024, they have served as missionaries/Administrative Overseer, and from 2018 to 2024 also serve as Superintendent to the anglophone West Africa countries. Living in Lagos, Nigeria, the Abiolas are strategically well located to minister to the entire country and the surrounding countries.",
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
