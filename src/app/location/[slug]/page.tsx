"use client";

import { trpc } from "@/app/_providers/trpc-provider";
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

 
const location = trpc.getSingleLocation.useQuery({name: params?.slug as string})



  return (
    <section>
      <div className="h-screen w-full skeleton bg-[url('/location/bannerImage.jpg')] bg-cover bg-center">
        <div className="absolute size-full bg-gradient-to-tr from-black from-[70%] opacity-50"></div>
        <div className="absolute size-full flex items-center justify-center text-[4rem] text-white tracking-widest">
          <p className="p-10 rounded-md bg-black bg-opacity-20 backdrop-blur">
      {location.data?.name}
          </p>
        </div>
      </div>
    </section>
  );
}
