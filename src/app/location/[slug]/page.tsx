"use client";

import useScrollPositionStore from "@/store/scroll-position.store";
import useShowHeaderStore from "@/store/show-header.store";
import useStyleHeaderStore from "@/store/style-header.store";
import styleHeader from "@/lib/style-header";
import useLocationsStore from "@/store/locations.store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import LocationsHero from "@/app/location/components/location-hero";
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

interface LocationType {
  id: null;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  default: boolean;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  pastors: string[];
  event: EventsType[];
  news: string[];
  offering: string[];
  $databaseId: string;
  $collectionId: string;
}

export default function LocationPage () {
  const params = useParams<{ slug: string }>();
  const [locationDetails, setLocationDetails] = useState<LocationType | "">("");
  const locationsData = useLocationsStore((state) => state.locationsData);
  const updateHeaderState: (id: string) => void = useShowHeaderStore((state) => state.setHeaderState);
  const updateHeaderStyle: (id: string) => void = useStyleHeaderStore((state) => state.setHeaderStyle);
  const scrollPosition: number = useScrollPositionStore((state) => state.scrollPosition);
  const updateScrollPosition: (id: number) => void = useScrollPositionStore((state) => state.setScrollPosition);

  useEffect(() => {
    //if locationsData hasn't been populated, force user to homepage to populate locationsData
    if (locationsData.length === 0) {
      window.location.href = "/";

      return;
    }

    const details = locationsData.filter(
      (data) => data.city === params?.slug.replaceAll("%20", " ")
    );

    setLocationDetails(details[0]);
  }, []);

  return (
    <main onScroll={() => styleHeader("location-hero", updateHeaderState, updateHeaderStyle, scrollPosition, updateScrollPosition)} className="relative h-screen w-full overflow-y-scroll overflow-x-hidden no-scrollbar">
      <LocationsHero locationDetails={locationDetails as LocationType} />
      <EventsScroll
        title={`EVENTS IN ${(locationDetails as LocationType).city}`}
        events={events}

      />
      <HomeFooter />
    </main>
  );
}
