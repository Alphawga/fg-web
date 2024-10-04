import { createPastorSchema, updatePastorSchema, deletePastorSchema } from "@/lib/dtos";
import { publicProcedure } from "@/server/trpc";
import prisma from "@/lib/prisma";

export const createPastor = publicProcedure.input(createPastorSchema)
  .mutation(async (opts) => {
    return await prisma.pastor.create({
      data: {
        name: opts.input.name,
        email: opts.input.email,
        phone: opts.input.phone,
        location_id: opts.input.location_id,
        head_pastor: opts.input.head_pastor,
        bio: opts.input.bio,
        image: opts.input.image,
      },
    });
  });

export const updatePastor = publicProcedure.input(updatePastorSchema)
  .mutation(async (opts) => {
    return await prisma.pastor.update({
      where: { id: opts.input.id },
      data: {
        name: opts.input.name,
        email: opts.input.email,
        phone: opts.input.phone,
        location_id: opts.input.location_id,
        head_pastor: opts.input.head_pastor,
        bio: opts.input.bio,
        image: opts.input.image,
      },
    });
  });

export const deletePastor = publicProcedure.input(deletePastorSchema)
  .mutation(async (opts) => {
    return await prisma.pastor.update({
      where: { id: opts.input.id },
      data: { updated_at: new Date() }
    });
  });

export const getAllPastors = publicProcedure.query(async () => {
  return await prisma.pastor.findMany({ include: { location: true } });
});
