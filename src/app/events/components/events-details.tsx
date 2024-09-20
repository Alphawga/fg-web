type EventsType = {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  location_id: string;
  location: string;
};

export default function EventsDetails ({ eventDetails }: { eventDetails: EventsType }) {
  return (
    <div className="bg-[#231f20] px-28 py-20 flex">
      <div className="w-[30%] space-y-10">
        <div>
          <p className="text-fg-gold font-semibold text-xl tracking-wider">
            DATE & TIME:
          </p>
          <p className="text-white text-xl">{eventDetails.start_date}</p>
        </div>
        <div>
          <p className="text-fg-gold font-semibold text-xl tracking-wider">
            LOCATION:
          </p>
          <p className="text-white text-xl">{eventDetails.location}</p>
        </div>
        <div>
          <p className="text-fg-gold font-semibold text-xl tracking-wider">
            LEADER:
          </p>
          <p className="text-white text-xl">Patric Ultra</p>
          <p className="text-white text-xl">(+234) 703 567 8904</p>
          <p className="text-white text-xl">Address</p>
        </div>
      </div>
      <div className="w-[70%] px-10">
        <p className="text-slate-200 text-lg font-normal">
          {eventDetails.description}
        </p>
      </div>
    </div>
  );
}
