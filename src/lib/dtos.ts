import { z } from "zod";

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const phoneRegex = /^\+\d{1,3}\d{10}$/;

export const loginFormSchema = z.object({
  username: z.string().min(2)
    .max(50),
  password: z.string(),
});

export const genders = {
  male: "MALE",
  female: "FEMALE",
};

export const createUserSchema = z.object({
  id: z.string().optional(),
  email: z.string(),
  phone_number: z.string(),
  name: z.string(),
  password: z.string(),

});

export const createEventSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  location_id: z.string(),
  start_date: z.date(),
  end_date: z.date()
});

export const deleteUserSchema = z.object({ id: z.string() });

export const deleteEventSchema = z.object({ id: z.string() });

export const deleteLocationSchema = z.object({ id: z.string() });

export const updateEventSchema = z.object({

  id: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  location_id: z.string().optional(),
  start_date: z.date().optional(),
  end_date: z.date().optional(),
});

export type TCreateUserSchema = z.infer<typeof createUserSchema>;

export type TCreateEventSchema = z.infer<typeof createEventSchema> ;

export const createLocationSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  postal_code: z.string(),
  default: z.boolean(),

});

export const updateLocationSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  postal_code: z.string(),
  default: z.boolean(),
});

export type TCreateLocationSchema = z.infer<typeof createLocationSchema>;

export const createNewsSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  location_id: z.string()
});

export const updateNewsSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  location_id: z.string()
});

export const findLocationByIdSchema = z.object({ location_id: z.string() });

export const getLocationByNameSchema = z.object({ name: z.string() });

export const deleteNewsSchema = z.object({ id: z.string() });

export type TcreateNewsSchema = z.infer<typeof createNewsSchema>;

export type FindLocationByIdSchema = z.infer<typeof findLocationByIdSchema >;
