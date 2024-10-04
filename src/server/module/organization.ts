import {
  createOrganizationSchema,
  updateOrganizationSchema,
  deleteOrganizationSchema,
  findOrganizationByIdSchema,
  getOrganizationByNameSchema,
} from "@/lib/dtos";
import prisma from "@/lib/prisma";
import { publicProcedure } from "@/server/trpc";

export const createOrganization = publicProcedure.input(createOrganizationSchema)
  .mutation(async (opts) => {
    return await prisma.organization.create({
      data: {
        name: opts.input.name,
        about_us: opts.input.about_us || null,
      },
    });
  });

export const updateOrganization = publicProcedure.input(updateOrganizationSchema)
  .mutation(async (opts) => {
    return await prisma.organization.update({
      where: { id: opts.input.id },
      data: {
        name: opts.input.name,
        about_us: opts.input.about_us || null,
      },
    });
  });

export const deleteOrganization = publicProcedure.input(deleteOrganizationSchema)
  .mutation(async (opts) => {
    return await prisma.organization.update({
      where: { id: opts.input.id },
      data: { updated_at: new Date() },
    });
  });

export const getAllOrganizations = publicProcedure.query(async () => {
  return await prisma.organization.findMany();
});

export const findOrganizationById = publicProcedure.input(findOrganizationByIdSchema)
  .query(async (opts) => {
    return await prisma.organization.findUnique({ where: { id: opts.input.id } });
  });

export const getOrganizationByName = publicProcedure.input(getOrganizationByNameSchema)
  .query(async (opts) => {
    return await prisma.organization.findFirst({ where: { name: opts.input.name } });
  });
