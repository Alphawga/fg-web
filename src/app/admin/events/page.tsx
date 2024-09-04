"use client";

import { trpc } from "@/app/_providers/trpc-provider";
import EventForm from "@/components/events/event-form";
import { DataTable } from "@/components/table/data-table";
import { columns } from "@/components/events/columns";
import { Event } from "@prisma/client";

export default function Page () {
  const eventRecord = trpc.getAllEvents.useQuery();

  return (
    <>
      <div>
        <h3 className="font-bold text-lg">Events</h3>
        <p className="mb-2">Create, view and track all events</p>
      </div>
      <DataTable
        data={eventRecord.data ?? []}
        columns={columns}
        filterInputPlaceholder="Filter events"
        filterColumnId="title"
        action={<EventForm event={{} as Event} action="Add" />}
      />
    </>
  );
}
