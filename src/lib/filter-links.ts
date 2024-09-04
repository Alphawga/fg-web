"use client";

import { ROLE_PERMISSIONS } from "./constants";
import { Links, links } from "@/app/admin/links";

export function filterLinksByRoles (roles: string[]): Links[] {
  const allowedLinks = new Set<string>();

  roles.forEach((role) => {
    (ROLE_PERMISSIONS[role] || []).forEach((link) => allowedLinks.add(link));
  });

  return links.filter((link) => allowedLinks.has(link.name));
}

