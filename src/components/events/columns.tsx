
import { format } from "date-fns";
import { DropdownMenu, DropdownMenuLabel, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import EventForm from "./event-form";
import { Event } from "@prisma/client";
import DeleteEventModal from "./delete-event";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import { trpc } from "@/app/_providers/trpc-provider";

interface ActionProps {
  event: Event;
}

function Action ({ event }: ActionProps) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0" data-cy="event-action">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Event actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <EventForm action="Edit" event={event} />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <DeleteEventModal id={event.id} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export const columns: ColumnDef<Event>[] = [
  {
    id: "title",
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Event title" />
    ),
    cell: ({ row }) => (
      <div className="py-0.5 text-sm font-medium select-none text-nowrap">
        {row.getValue("title")}
      </div>
    ),
  },
  {
    id: "description",
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => (
      <div className="py-0.5 text-sm font-medium select-none text-nowrap">
        {row.getValue("description")}
      </div>
    ),
  },
  {
    id: "name",
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location Name" />
    ),
    cell: ({ row }) => {
      const { data: foundLocation } = trpc.findLocationById.useQuery({ location_id: row.original.location_id });

      return (
        <div className="py-0.5 text-sm font-medium select-none text-nowrap">
          {foundLocation?.name}
        </div>
      );
    }
  },
  {
    id: "address",
    accessorKey: "address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location Address" />
    ),
    cell: ({ row }) => {
      const { data: foundLocation } = trpc.findLocationById.useQuery({ location_id: row.original.location_id });

      return (
        <div className="py-0.5 text-sm font-medium select-none text-nowrap">
          {foundLocation?.address}
        </div>
      );
    }
  },
  {
    id: "start_date",
    accessorKey: "start_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Start Date" />
    ),
    cell: ({ row }) => (
      <div className="py-0.5 text-sm font-medium text-nowrap select-none">
        {format(new Date(row.getValue("start_date")), "PPP")}
      </div>
    ),
  },
  {
    id: "end_date",
    accessorKey: "end_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="End Date" />
    ),
    cell: ({ row }) => (
      <div className="py-0.5 text-sm font-medium select-none text-nowrap">
        {format(new Date(row.getValue("end_date")), "PPP")}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => <Action event={row.original} />,
  },
];
