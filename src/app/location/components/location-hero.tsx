import { useState } from "react";
import { IoClose } from "react-icons/io5";

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

type OfferingProps = {
  setGiveOffering: React.Dispatch<React.SetStateAction<boolean>>;
  locationDetails: LocationType;
};

function GiveOffering ({ setGiveOffering, locationDetails }: OfferingProps) {
  return (
    <div className="fixed z-10 size-full bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center">
      <div className="relative w-1/3 mx-auto p-5 bg-white rounded-md border-4 border-fg-gold">
        <div className="absolute right-0 top-0">
          <button onClick={() => setGiveOffering(false)} className="bg-red-500 hover:bg-red-700 size-10 flex items-center justify-center">
            <IoClose />
          </button>

        </div>
        <p className="text-center text-fg-gold font-bold text-xl my-5">
        GIVE OFFERING
        </p>
        <div className="space-y-2">
          <p>
            <span className="underline uppercase font-medium">
          Account Number:
            </span>{" "}
        1234567890
          </p>
          <p>
            <span className="underline uppercase font-medium">
          Account Name:
            </span>{" "}
        Full Gospel Church Of God {locationDetails.name}
          </p>
          <p>
            <span className="underline uppercase font-medium">Bank:</span>{" "}
        GTBank
          </p>
        </div>

      </div>
    </div>
  );
}

export default function LocationsHero ({ locationDetails }: {
  locationDetails: LocationType;
}) {
  const [giveOffering, setGiveOffering] = useState(false);

  return (
    <div
      id="location-hero"
      className="relative h-screen w-full skeleton bg-[url('/location/bannerImage.jpg')] bg-cover bg-center"
    >
      {giveOffering && <GiveOffering setGiveOffering={setGiveOffering} locationDetails={locationDetails} />}
      <div className="absolute size-full bg-gradient-to-tr from-black from-[70%] opacity-50"></div>
      <div className="absolute size-full px-40 pt-60 bg-red-40">
        <div className="space-y-5 text-white font-bold uppercase">
          <p className="uppercase text-white font-bold ">
            {" "}
            JOIN US AT {locationDetails.city} | {locationDetails.name}
          </p>
          <p>Saturday 4pm, Sunday 9 & 11am</p>
          <div>
            <p>{locationDetails.address}</p>
            <p>
              {locationDetails.city}, {locationDetails.state},{" "}
              {locationDetails.country}
            </p>
          </div>

          <p>{locationDetails.postal_code}</p>

          <div>
            <button onClick={() => setGiveOffering(true)} className="px-4 py-2 bg-fg-gold text-black rounded-md font-normal hover:bg-white">
              GIVE OFFERING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
