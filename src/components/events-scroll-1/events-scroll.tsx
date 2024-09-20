import Link from "next/link";

type EventsType = {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  location_id: string;
  location: string;
};

export default function EventsScroll ({ title, events }: {title: string; events: EventsType[] }) {
  return (
    <section className="bg-[#231f20]  py-10 bg-[url('/home/events-bg.svg')] bg-fixed bg-cove bg-center">
      <div className="pl-32 pt-28 xs:max-md:pl-5 xs:max-md:pt-5 ">
        <h2 className="text-white font-medium text-2xl xs:max-md:text-base uppercase ">
          {title}
        </h2>
      </div>
      <div className="relative p-10 xs:max-md:px-5 flex w-full h-[80vh] xs:max-md:h-[70vh] overflow-scroll gap-10 no-scrollbar">
        {events.map((event) => {
          return (
            <Link
              href={`/events/${event.title}`}
              key={event.id}
              className="relative group min-w-[23%] xs:max-md:min-w-[80%] h-full hover:h-auto rounded-2xl bg-[#161415 transition-all text-xl font-medium hover:scale-[105%] xs:max-md:hover:scale-100 overflow-hidden bg-[url('/home/event-card.jpg')]"
            >
              <div className="absolute size-full bg-black opacity-60"></div>
              <div className="relative w-full h-full group-hover:h-[50%] xs:max-md:group-hover:h-full overflow-hidden">
                <div className="absolute left-5 right-5 bottom-5 text-white">
                  <p>{event.title}</p>
                  <p className="text-slate-200">{event.location}</p>
                  <p className="text-fg-gold">{event.start_date}</p>
                </div>
              </div>
              <div className="hidden relative z-10 bg-fg-gr9 group-hover:block group-hover:h-auto xs:max-md:group-hover:hidden w-full space-y-1 px-5 py-3">
                <p className="text-base text-slate-200">{event.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
