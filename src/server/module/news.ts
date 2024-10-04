import { createNewsSchema, deleteNewsSchema, updateNewsSchema } from "@/lib/dtos";
import { publicProcedure } from "@/server/trpc";
import prisma from "@/lib/prisma";

export const createNews = publicProcedure.input(createNewsSchema).mutation(async (opts)=>{
  return await prisma.news.create({
    data: {
      title: opts.input.title,
      content: opts.input.content,
      location_id: opts.input.location_id,
      image: opts.input.image
    }
  });
});

export const updateNews = publicProcedure.input(updateNewsSchema).mutation(async (opts)=>{
  return await prisma.news.update({
    where: { id: opts.input.id },
    data: {
      ...opts.input,
      title: opts.input.title,
      content: opts.input.content,
      location_id: opts.input.location_id,
      image: opts.input.image
    }
  });
});

export const deleteNews = publicProcedure.input(deleteNewsSchema)
  .mutation(async (opts)=>{
    return await prisma.news.update(
      {
        where: { id: opts.input.id },
        data: { deleted_at: new Date() }
      });
  });

export const getAllNews = publicProcedure.query(async ()=>{
  return await prisma.news.findMany(
    { where: { deleted_at: null }, include: { location: true } }
  );
});
