"use client";

import useScrollPositionStore from "@/store/scroll-position.store";
import useShowHeaderStore from "@/store/show-header.store";
import useStyleHeaderStore from "@/store/style-header.store";
import styleHeader from "@/lib/style-header";
import useLocationsStore from "@/store/locations.store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import EventsHero from "@/app/events/components/events-hero";
import EventsDetails from "@/app/events/components/events-details";
import EventsScroll from "@/components/events-scroll-1/events-scroll";
import HomeFooter from "@/components/footer/Footer";
import events from "@/contents/events";

type EventsType = {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  location_id: string;
  location: string;
};

export default function EventsPage () {
  const params = useParams<{ slug: string }>();
  const [eventDetails, setEventDetails] = useState<EventsType | "">("");
  const locationsData = useLocationsStore((state) => state.locationsData);
  const updateHeaderState: (id: string) => void = useShowHeaderStore((state) => state.setHeaderState);
  const updateHeaderStyle: (id: string) => void = useStyleHeaderStore((state) => state.setHeaderStyle);
  const scrollPosition: number = useScrollPositionStore((state) => state.scrollPosition);
  const updateScrollPosition: (id: number) => void = useScrollPositionStore((state) => state.setScrollPosition);

  useEffect(() => {
    //if locationsData hasn't been populated, force user to homepage to populate locationsData
    // if (locationsData.length === 0) {
    //   window.location.href = "/";

    //   return;
    // }

    // alert(params?.slug.replace("%20", " "));

    const details = events.filter(
      (event) => event.title === params?.slug.replaceAll("%20", " ")
    );

    // alert(details);

    setEventDetails(details[0]);
  }, []);

  return (
    <main onScroll={() => styleHeader("events-hero", updateHeaderState, updateHeaderStyle, scrollPosition, updateScrollPosition)} className="relative h-screen w-full overflow-y-scroll overflow-x-hidden no-scrollbar">
      <EventsHero eventDetails={eventDetails as EventsType} />
      <EventsDetails eventDetails={eventDetails as EventsType} />
      <EventsScroll title="YOU MIGHT ALSO LIKE" events={events} />
      <HomeFooter />
    </main>
  );
}
