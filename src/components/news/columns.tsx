import DeleteNewsModal from "@/components/news/delete-news";
import NewsForm from "@/components/news/news-form";
import { News } from "@prisma/client";
import { DropdownMenu, DropdownMenuLabel, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";

interface ActionProps {
  news: News;
}

function NewsAction ({ news }: ActionProps) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0" data-cy="news-action">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>News actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <NewsForm action="Edit" news={news} />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <DeleteNewsModal id={news.id} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export const columns: ColumnDef<News>[] = [
  {
    id: "title",
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => (
      <div className="py-0.5 text-sm font-medium select-none text-nowrap">
        {row.getValue("title")}
      </div>
    ),
  },
  {
    id: "content",
    accessorKey: "content",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Content" />
    ),
    cell: ({ row }) => (
      <div className="py-0.5 text-sm font-medium select-none text-nowrap">
        {row.getValue("content")}
      </div>
    ),
  },
  {
    id: "location_id",
    accessorKey: "location_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location ID" />
    ),
    cell: ({ row }) => (
      <div className="py-0.5 text-sm font-medium select-none text-nowrap">
        {row.getValue("location_id")}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => <NewsAction news={row.original} />,
  },
];

