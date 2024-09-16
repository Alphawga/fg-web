"use client";

import useLocationsStore from "@/store/locations.store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
  event: string[];
  news: string[];
  offering: string[];
  $databaseId: string;
  $collectionId: string;
}

export default function LocationPage () {
  const params = useParams<{ slug: string }>();
  const [locationDetails, setLocationDetails] = useState<LocationType | "">("");
  const locationsData = useLocationsStore(state => state.locationsData);

  useEffect(() => {
    //if locationsData hasn't been populated, force user to homepage to populate locationsData
    if (locationsData.length === 0) {
      window.location.href = "/";

      return;
    }

    const details = locationsData.filter(data => data.city === params?.slug.replace("%20", " "));

    setLocationDetails(details[0]);
  }, []);

  return (
    <section>
      <div className="h-screen w-full skeleton bg-[url('/location/bannerImage.jpg')] bg-cover bg-center">
        <div className="absolute size-full bg-gradient-to-tr from-black from-[70%] opacity-50"></div>
        <div className="absolute size-full flex items-center justify-center text-[4rem] text-white tracking-widest">
          <p className="p-10 rounded-md bg-black bg-opacity-20 backdrop-blur">
            {params?.slug.replace("%20", " ")}<br />
            {(locationDetails as LocationType).address}<br />
            {(locationDetails as LocationType).postal_code}
          </p>
        </div>
      </div>
    </section>
  );
}
