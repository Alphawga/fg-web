import { trpc } from "@/app/_providers/trpc-provider";
import { Event, Location } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface EventsScrollProps {
  eventsProp: Event[] | undefined;
  location: Location | undefined;
}

export default function EventsScroll ({ eventsProp, location }: EventsScrollProps) {
  const  events = trpc.getAllEvents.useQuery();

  if(location) {
    return (
      <section className="bg-[#231f20]  py-10 bg-[url('/home/events-bg.svg')] bg-fixed bg-cove bg-center">
        <div className="pl-32 pt-28 xs:max-md:pl-5 xs:max-md:pt-5 ">
          <h2 className="text-white font-medium text-2xl xs:max-md:text-base ">
          MEDIA EVENTS AROUND FULL GOSPEL CHURCH OF GOD
          </h2>
        </div>
        <div className="relative p-10 xs:max-md:px-5 flex w-full h-[80vh] xs:max-md:h-[70vh] overflow-scroll gap-10 no-scrollbar">
          {eventsProp?.filter(event => event.image).map((event) => {
            return (
              <Link
                href="/"
                key={event.id}
                className="relative group min-w-[23%] xs:max-md:min-w-[80%] h-full hover:h-auto rounded-2xl bg-[#161415] transition-all text-white text-xl font-medium hover:scale-[105%] xs:max-md:hover:scale-100 overflow-hidden"
              >
                <div className="absolute size-full bg-white opacity-10"></div>
                <div className="relative w-full h-full skeleton group-hover:h-[80%] xs:max-md:group-hover:h-full flex items-center justify-center overflow-hidden">
                  <Image src={event.image as string} className="object-cover object-center" alt="event flier"
                    layout="fill"/>
                </div>
                <div className="hidden group-hover:flex xs:max-md:group-hover:hidden w-full h-auto space-y-1 px-5 py-3 items-center justify-center">
                  {event.description}
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
          MEDIA EVENTS AROUND FULL GOSPEL CHURCH OF GOD
        </h2>
      </div>
      <div className="relative p-10 xs:max-md:px-5 flex w-full h-[80vh] xs:max-md:h-[70vh] overflow-scroll gap-10 no-scrollbar">
        {events.data?.filter(event => event.image).map((event) => {
          return (
            <Link
              href="/"
              key={event.id}
              className="relative group min-w-[23%] xs:max-md:min-w-[80%] h-full hover:h-auto rounded-2xl bg-[#161415] transition-all text-white text-xl font-medium hover:scale-[105%] xs:max-md:hover:scale-100 overflow-hidden"
            >
              <div className="absolute size-full bg-white opacity-10"></div>
              <div className="relative w-full h-full skeleton group-hover:h-[80%] xs:max-md:group-hover:h-full flex items-center justify-center overflow-hidden">
                <Image src={event.image as string} className="object-cover object-center" alt="event flier"
                  layout="fill"/>
              </div>
              <div className="hidden group-hover:flex xs:max-md:group-hover:hidden w-full h-auto space-y-1 px-5 py-3 items-center justify-center">
                {event.description}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
