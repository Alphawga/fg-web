"use client";

import { trpc } from "@/app/_providers/trpc-provider";
import { columns } from "@/components/news/columns";
import NewsForm from "@/components/news/news-form";
import { DataTable } from "@/components/table/data-table";
import { News } from "@prisma/client";

export default function Page () {
  const newsRecord = trpc.getAllNews.useQuery();

  return (
    <>
      <div>
        <h3 className="font-bold text-lg">News</h3>
        <p className="mb-2">Create, view, and track all news articles.</p>
      </div>
      <DataTable
        data={newsRecord.data ?? []}
        columns={columns}
        filterInputPlaceholder="Filter news"
        filterColumnId="title"
        action={<NewsForm news={{} as News} action="Add" />}
      />
    </>
  );
}
