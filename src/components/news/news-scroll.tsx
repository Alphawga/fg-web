import { trpc } from "@/app/_providers/trpc-provider";
import { Location, News } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface NewsScrollProps {
  news: News[] | undefined;
  location: Location | undefined;
}

export default function NewsScroll ({ news, location }: NewsScrollProps) {
  const  events = trpc.getAllNews.useQuery();

  if(location) {
    return (
      <section className="bg-[#231f20]  py-10 bg-[url('/home/events-bg.svg')] bg-fixed bg-cove bg-center">
        <div className="pl-32 pt-28 xs:max-md:pl-5 xs:max-md:pt-5 ">
          <h2 className="text-white font-medium text-2xl xs:max-md:text-base ">
        LATEST  NEWS AROUND FULL GOSPEL CHURCH OF GOD
          </h2>
        </div>
        <div className="relative p-10 xs:max-md:px-5 flex w-full h-[80vh] xs:max-md:h-[70vh] overflow-scroll gap-10 no-scrollbar">
          {news?.filter(e => e.image).map((event) => {
            return (
              <Link
                href="/"
                key={event.id}
                className="relative group min-w-[23%] xs:max-md:min-w-[80%] h-full hover:h-auto rounded-2xl bg-[#161415] transition-all text-white text-xl font-medium hover:scale-[105%] xs:max-md:hover:scale-100 overflow-hidden"
              >
                <div className="absolute size-full bg-white opacity-10"></div>
                <div className="relative w-full h-full skeleton group-hover:h-[80%] xs:max-md:group-hover:h-full flex items-center justify-center overflow-hidden">
                  <Image src={event.image as string} layout="fill" className="object-cover object-center" alt="event flier" />
                </div>
                <div className="hidden group-hover:flex xs:max-md:group-hover:hidden w-full h-auto space-y-1 px-5 py-3 items-center justify-center">
                  {event.content}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#231f20]  py-10 bg-[url('/home/events-bg.svg')] bg-fixed bg-cove bg-center">
      <div className="pl-32 pt-28 xs:max-md:pl-5 xs:max-md:pt-5 ">
        <h2 className="text-white font-medium text-2xl xs:max-md:text-base ">
        LATEST  NEWS AROUND FULL GOSPEL CHURCH OF GOD
        </h2>
      </div>
      <div className="relative p-10 xs:max-md:px-5 flex w-full h-[80vh] xs:max-md:h-[70vh] overflow-scroll gap-10 no-scrollbar">
        {events.data?.filter(e => e.image).map((event) => {
          return (
            <Link
              href="/"
              key={event.id}
              className="relative group min-w-[23%] xs:max-md:min-w-[80%] h-full hover:h-auto rounded-2xl bg-[#161415] transition-all text-white text-xl font-medium hover:scale-[105%] xs:max-md:hover:scale-100 overflow-hidden"
            >
              <div className="absolute size-full bg-white opacity-10"></div>
              <div className="relative w-full h-full skeleton group-hover:h-[80%] xs:max-md:group-hover:h-full flex items-center justify-center overflow-hidden">
                <Image src={event.image as string} layout="fill" className="object-cover object-center" alt="event flier" />
              </div>
              <div className="hidden group-hover:flex xs:max-md:group-hover:hidden w-full h-auto space-y-1 px-5 py-3 items-center justify-center">
                {event.content}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
