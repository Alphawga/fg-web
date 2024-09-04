
import { DropdownMenu, DropdownMenuLabel, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Location } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import LocationForm from "./location-form";
import DeleteLocationModal from "./delete-location";

interface ActionProps {
  location: Location;
}

function Action ({ location }: ActionProps) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0" data-cy="location-action">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Location actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <LocationForm action="Edit" location={location} />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <DeleteLocationModal id={location.id} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export const columns: ColumnDef<Location>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location Name" />
    ),
    cell: ({ row }) => (
      <div className="py-0.5 text-sm font-medium select-none text-nowrap">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    id: "address",
    accessorKey: "address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
    cell: ({ row }) => (
      <div className="py-0.5 text-sm font-medium select-none text-nowrap">
        {row.getValue("address")}
      </div>
    ),
  },
  {
    id: "city",
    accessorKey: "city",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="City" />
    ),
    cell: ({ row }) => (
      <div className="py-0.5 text-sm font-medium select-none text-nowrap">
        {row.getValue("city")}
      </div>
    ),
  },
  {
    id: "state",
    accessorKey: "state",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="State" />
    ),
    cell: ({ row }) => (
      <div className="py-0.5 text-sm font-medium select-none text-nowrap">
        {row.getValue("state")}
      </div>
    ),
  },
  {
    id: "country",
    accessorKey: "country",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Country" />
    ),
    cell: ({ row }) => (
      <div className="py-0.5 text-sm font-medium select-none text-nowrap">
        {row.getValue("country")}
      </div>
    ),
  },
  {
    id: "postal_code",
    accessorKey: "postal_code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="postal code" />
    ),
    cell: ({ row }) => (
      <div className="py-0.5 text-sm font-medium select-none text-nowrap">
        {row.getValue("postal_code")}
      </div>
    ),
  },
  {
    id: "default",
    accessorKey: "default",
    header: ({ column })=>(
      <DataTableColumnHeader column={column} title="default"/>
    ),
    cell: ({ row })=> (
      <div className="py-0.5 text-sm font-medium select-none text-nowrap">
        {row.original.default ? "yes" : "no"}
      </div>
    )
  },
  {
    id: "actions",
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => <Action location={row.original} />,
  },
];
