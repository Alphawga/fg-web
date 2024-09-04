"use client";

import { IPermission } from "@/lib/models";

export function checkPermission (organizationSlug: string, permissions: IPermission[]) {
  try {
    return permissions.some(permission => permission.resource_id === organizationSlug);
  } catch (error) {
    console.error("Error checking permission:", error);

    return false;
  }
}

export function checkUserRole (organizationSlug: string, permissions: IPermission[]) {
  try {
    return permissions.some(permission => permission.resource_id === organizationSlug);
  } catch (error) {
    console.error("Error checking permission:", error);

    return false;
  }
}
