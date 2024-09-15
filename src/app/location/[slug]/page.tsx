"use client";

import { useParams } from "next/navigation";

export default function LocationPage () {
  const params = useParams<{ slug: string }>();

  return (
    <section>
      <div className="h-screen w-full skeleton bg-[url('/location/bannerImage.jpg') bg-cover bg-center">
        {/* <div className="absolute size-full bg-gradient-to-tr from-black from-[70%] opacity-50"></div>
        <div className="absolute size-full flex items-center justify-center text-[4rem] text-white tracking-widest">
          <p className="p-10 rounded-md bg-black bg-opacity-20 backdrop-blur">
            {params.slug.replace("%20", " ")}
          </p>
        </div> */}
      </div>
    </section>
  );
}
