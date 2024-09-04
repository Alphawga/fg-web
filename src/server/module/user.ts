import { createUserSchema, deleteUserSchema } from "@/lib/dtos";
import bcrypt from "bcryptjs";
import { publicProcedure } from "@/server/trpc";
import prisma from "@/lib/prisma";

export const createUser = publicProcedure.input(createUserSchema).mutation(async (opts)=>{
  return await prisma.user.create({
    data: {
      email: opts.input.email,
      phone_number: opts.input.phone_number,
      name: opts.input.name,
      username: opts.input.name,
      active: true,
      created_at: new Date(),
      password: bcrypt.hashSync(opts.input.password, 10)
    },
  });
});

export const updateUser = publicProcedure.input(createUserSchema).mutation(async (opts)=>{
  return await prisma.user.update({
    where: { id: opts.input.id },
    data: {
      email: opts.input.email,
      phone_number: opts.input.phone_number,
      name: opts.input.name,
      active: true,
      created_at: new Date(),
      password: bcrypt.hashSync(opts.input.password, 10)
    },
  });
});

export const deleteUser = publicProcedure.input(deleteUserSchema).mutation(async (opts)=>{
  return await prisma.user.update({
    where: { id: opts.input.id },
    data: { deleted_at: new Date() },
  });
});

export const getAllUsers = publicProcedure.query(async ()=>{
  return await prisma.user.findMany({ where: { deleted_at: null } });
});

