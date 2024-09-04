
import { createEventSchema, deleteEventSchema, updateEventSchema } from "@/lib/dtos";
import { publicProcedure } from "@/server/trpc";
import prisma from "@/lib/prisma";

export const createEvent = publicProcedure.input(createEventSchema)
  .mutation(async (opts) => {
    return await prisma.event.create({
      data: {
        title: opts.input.title,
        description: opts.input.description,
        location_id: opts.input.location_id,
        start_date: opts.input.start_date,
        end_date: opts.input.end_date,
      }
    });
  });

export const updateEvent = publicProcedure.input(updateEventSchema)
  .mutation(async (opts) => {
    return await prisma.event.update({
      where: { id: opts.input.id },
      data: {
        title: opts.input.title,
        description: opts.input.description,
        location_id: opts.input.location_id,
        start_date: opts.input.start_date,
        end_date: opts.input.end_date
      }
    });
  });

export const deleteEvent = publicProcedure.input(deleteEventSchema)
  .mutation(async (opts) => {
    return await prisma.event.update({
      where: { id: opts.input.id },
      data: { deleted_at: new Date() }
    });
  });

export const getAllEvents = publicProcedure.query(async () => {
  return await prisma.event.findMany(

    { where: { deleted_at: null } }
  );
});
