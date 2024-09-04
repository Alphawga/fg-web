import Image from "next/image";
import Link from "next/link";

type ContentProps = { title: string; image: string; link: string }[];

export default function ContentSection ({
  contentList,
  category,
}: {
  contentList: ContentProps;
  category: string;
}) {
  return (
    <div className="size-full flex">
      {category !== "WORSHIP" ? (
        contentList.map((content) => (
          <Link
            key={content.title}
            href={content.link}
            target="_blank"
            className="relative w-[25%] xs:max-md:overflow-hidden hover:w-[40%] transition-all"
          >
            <figure className="relative size-full">
              <Image
                fill={true}
                src={content.image}
                alt={content.title}
                className="object-cover hover:object-left"
              />
            </figure>
            <div className="absolute top-0 left-0 z-10 size-full bg-black bg-opacity-50">
              <div className="absolute right-5 xs:max-md:right-1 left-5 xs:max-md:left-3 bottom-5">
                {category !== "READ" && (
                  <div className="size-10 bg-[#d3b975] rounded-full flex items-center justify-center mb-5">
                    <div className="border-l-[.8rem] border-y-[.5rem] border-l-black border-y-transparent ml-[.3rem]"></div>
                  </div>
                )}
                <p className="text-slate-200 font-medium text-lg xs:max-md:text-sm">{content.title}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="relative size-full skeleton">
          <div className="absolute z-10 text-sm w-full text-center top-5">
            Tim Hill SUNDAY MORNING SINGING “He Looked Beyond My Faults
          </div>
          <video className="size-full object-cover" autoPlay loop controls>
            <source src="/be-inspired/worship/video.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}
