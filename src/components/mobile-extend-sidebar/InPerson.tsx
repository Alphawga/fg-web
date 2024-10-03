import useLocationsStore from "@/store/locations.store";
import Link from "next/link";

export default function InPerson () {
  const locations = useLocationsStore((state) => state.locationsData);

  return (
    <div className="h-full overflow-auto space-y-5">
      <h3 className="text-white font-medium tracking-wider">
        CAMPUS LOCATIONS
      </h3>
      <ul className="text-[#ABA7A5]">
        {locations.map((location) => (
          <li key={location.id} className="my-2 relative">
            <Link
              href={`/location/${location.name}`}
              className="text-[#aba7a5] pb-2 text-xl xs:max-md:text-lg hover:text-white "
            >
              {location.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
