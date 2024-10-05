import locations from "@/contents/locations";
import Link from "next/link";

export default function Give () {
  return (
    <div
      id="give-hero"
      className="bg-[url('/give-horizon.jpg')] relative bg-cover bg-center bg-[#231f20] h-[150vh"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 pt-[55vh] px-56 xs:max-md:px-20">
        <h2 className="text-5xl xs:max-md:text-6xl font-mediu text-white bg-red-40">
          Give
        </h2>
        <div className="flex flex-col items-center mt-40 w-full">
          <h3 className="text-xl mb-10 md:text-2xl font-medium text-[#ABA7A5] ">
            Give By Credit Card or Bank Account
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 w-full md:max-w-3xl">
            {locations.map((state, index) => (
              <Link key={index} href="https://www.cogwm.org/shop/abiola/">
                <button className="bg-[#D3B975] w-full py-2 text-xl text-[#161415] font-medium rounded-full hover:bg-white">
                  {state}
                </button>
              </Link>
            ))}
          </div>
          <div className="mt-8 md:mt-12"></div>
        </div>
      </div>
    </div>
  );
}
