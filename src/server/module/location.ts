import { createLocationSchema, deleteLocationSchema, findLocationByIdSchema, getLocationByNameSchema, updateLocationSchema } from "@/lib/dtos";
import prisma from "@/lib/prisma";
import { publicProcedure } from "@/server/trpc";

export const createLocation = publicProcedure.input(createLocationSchema)
  .mutation(async (opts)=> {
    return await prisma.location.create({
      data: {
        name: opts.input.name,
        address: opts.input.address,
        city: opts.input.city,
        state: opts.input.state,
        country: opts.input.country,
        postal_code: opts.input.postal_code,
        default: opts.input.default,
      }
    });
  });

export const updateLocation = publicProcedure.input(updateLocationSchema).mutation(async (opts)=>{
  return await prisma.location.update({
    where: { id: opts.input.id },
    data: {
      name: opts.input.name,
      address: opts.input.address,
      city: opts.input.city,
      state: opts.input.state,
      country: opts.input.country,
      postal_code: opts.input.postal_code,
      default: opts.input.default,
    }
  });
});

export const deleteLocation = publicProcedure.input(deleteLocationSchema)
  .mutation(async (opts)=>{
    return await prisma.location.update(
      {
        where: { id: opts.input.id },
        data: { deleted_at: new Date() }
      });
  });

export const getAllLocations = publicProcedure.query(async () =>{
  return await prisma .location.findMany(
    { where: { deleted_at: null } }
  );
});

export const findLocationById = publicProcedure.input(findLocationByIdSchema).query(async (opts) =>{
  return await prisma.location.findUnique(
    { where: { id: opts.input.location_id } }
  );
});

export const getSingleLocation = publicProcedure.input(getLocationByNameSchema).query(async (opts) =>{
  return await prisma.location.findFirst(
    {
      where: { name: opts.input.name },
      include: {
        events: true,
        news: true,
      }
    }
  );
});
