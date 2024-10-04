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
  end_date: z.date(),
  image: z.string()
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
  image: z.string().optional()
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
  location_id: z.string(),
  image: z.string().optional()
});

export const updateNewsSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  content: z.string(),
  location_id: z.string(),
  image: z.string().optional()
});

export const createOrganizationSchema = z.object({
  name: z.string().min(1, "Organization name is required")
    .max(255),
  about_us: z.string().optional()
});

export const updateOrganizationSchema = z.object({
  id: z.string().uuid("Invalid organization ID"), // Ensures ID is a valid UUID
  name: z.string().min(1, "Organization name is required")
    .max(255),
  about_us: z.string().optional()
    .nullable(),
});

export const createPastorSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  location_id: z.string(),
  head_pastor: z.boolean().optional(),
  bio: z.string().optional(),
  image: z.string().optional(),
});

export const updatePastorSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  location_id: z.string(),
  head_pastor: z.boolean().optional(),
  bio: z.string().optional(),
  image: z.string().optional(),
});

export const deletePastorSchema = z.object({ id: z.string() });

export const deleteOrganizationSchema = z.object({ id: z.string().uuid("Invalid organization ID") });

export const findOrganizationByIdSchema = z.object({ id: z.string().uuid("Invalid organization ID") });

export const getOrganizationByNameSchema = z.object({ name: z.string().min(1, "Organization name is required") });

export const findLocationByIdSchema = z.object({ location_id: z.string() });

export const getLocationByNameSchema = z.object({ name: z.string() });

export const deleteNewsSchema = z.object({ id: z.string() });

export type TcreateNewsSchema = z.infer<typeof createNewsSchema>;

export type FindLocationByIdSchema = z.infer<typeof findLocationByIdSchema >;

export type TCreateorganizationSchema = z.infer<typeof createOrganizationSchema>;

export type TCreatePastorSchema = z.infer<typeof createPastorSchema>;
