type EventsType = {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  location_id: string;
  location: string;
};

export default function EventsHero ({ eventDetails }: {eventDetails: EventsType}) {
  return (
    <div
      id="events-hero"
      className="relative h-screen w-full skeleton bg-[url('/events/bannerImage.jpg')] bg-cover bg-center"
    >
      <div className="absolute size-full px-60 pt-60 space-y-5">
        <p className="text-fg-gold font-medium text-[3rem]">
          {eventDetails.title}
        </p>
        <p className="text-3xl text-stone-300 font-extralight">{eventDetails.location}</p>
        <p className="text-2xl text-slate-50 font-extralight p-5 backdrop-blur-md rounded-md">{eventDetails.description}</p>
      </div>
    </div>
  );
}
