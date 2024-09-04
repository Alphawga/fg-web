import locations from "@/contents/locations";

export default function InPerson () {
  return (
    <div className="h-full overflow-auto space-y-5">
      <h3 className="text-white font-medium tracking-wider">CAMPUS LOCATIONS</h3>
      <ul className="text-[#ABA7A5]">
        {locations.map(item => <li key={item} className="my-2">{item}</li>)}
      </ul>
    </div>
  );
}
