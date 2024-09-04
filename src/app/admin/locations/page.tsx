"use client";

import { trpc } from "@/app/_providers/trpc-provider";
import { columns } from "@/components/location/columns";
import LocationForm from "@/components/location/location-form";
import { DataTable } from "@/components/table/data-table";
import { Location } from "@prisma/client";

export default function Page () {
  const locationRecord = trpc.getAllLocations.useQuery();

  return (
    <>
      <div>
        <h3 className="font-bold text-lg">Locations</h3>
        <p className="mb-2">create,view and track all location </p>
      </div>
      <DataTable
        data={locationRecord.data ?? []}
        columns={columns}
        filterInputPlaceholder="Filter locations"
        filterColumnId="name"
        action={<LocationForm location={{} as Location} action="Add" />}
      />
    </>
  );
}
