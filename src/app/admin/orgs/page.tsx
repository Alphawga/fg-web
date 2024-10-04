"use client";

import { trpc } from "@/app/_providers/trpc-provider";
import { DataTable } from "@/components/table/data-table";
import { Event, Organization } from "@prisma/client";
import OrganizationForm from "@/components/organization/organization-form";
import { columns } from "@/components/organization/columns";

export default function Page () {
  const organizationRecord = trpc.getAllOrganizations.useQuery();

  return (
    <>
      <div>
        <h3 className="font-bold text-lg">Orgs</h3>
        <p className="mb-2">Create, view and track all organization</p>
      </div>
      <DataTable
        data={organizationRecord.data ?? []}
        columns={columns}
        filterInputPlaceholder="Filter organization"
        filterColumnId="title"
        action={<OrganizationForm organization={{} as Organization} action="Add" />}
      />
    </>
  );
}
