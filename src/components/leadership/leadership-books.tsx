import Link from "next/link";

export default function LeadershipBooks () {
  return (
    <div className="bg-[#231f20] py-10 bg-[url('/home/events-bg.svg')] bg-fixed bg-center">
      <div className="pl-32 py-10 xs:max-md:pl-5 xs:max-md:pt-5 ">
        <h2 className="text-white font-medium text-lg tracking-wider xs:max-md:text-xl ">
          BOOKS FROM ROB KETTLING
        </h2>
      </div>
      <div className="relative py-5 xs:max-md:px-5 flex w-full h-[80vh] xs:max-md:h-[60vh] overflow-scroll gap-10 no-scrollbar">
        {[1, 2, 3, 4, 5].map((event) => {
          return (
            <Link
              href="/"
              key={event}
              className="relative group min-w-[23%] xs:max-md:min-w-[80%] h-full rounded-2xl overflow-hidden bg-[#161415] transition-all text-white text-xl font-medium "
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-500 flex items-center justify-center">
                BOOK
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
