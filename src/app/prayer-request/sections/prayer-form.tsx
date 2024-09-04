import BibleQuote from "./bible-quote";
import RequestDetails from "./request-details";

export default function PrayerForm () {
  return (
    <div className="bg-[#161415] py-20 xs:max-md:py-10">
      <div className="w-[60%] xs:max-md:w-[90%] mx-auto">
        <BibleQuote />
        <RequestDetails />
      </div>
    </div>
  );
}
