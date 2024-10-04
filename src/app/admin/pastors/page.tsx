"use client";

import { trpc } from "@/app/_providers/trpc-provider";
import { columns } from "@/components/pastors/columns";
import PastorForm from "@/components/pastors/pastor-form";
import { DataTable } from "@/components/table/data-table";
import {  Pastor } from "@prisma/client";

export default function Page () {
  const pastorRecord = trpc.getAllPastors.useQuery();

  return (
    <>
      <div>
        <h3 className="font-bold text-lg">Pastors</h3>
        <p className="mb-2">Create, view and track all parent</p>
      </div>
      <DataTable
        data={pastorRecord.data ?? []}
        columns={columns}
        filterInputPlaceholder="Filter parent"
        filterColumnId="title"
        action={<PastorForm pastor={{} as Pastor} action="Add" />}
      />
    </>
  );
}
