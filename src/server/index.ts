import { createUser, deleteUser, getAllUsers, updateUser } from "./module/user";
import { createEvent, deleteEvent, getAllEvents, updateEvent } from "./module/events";
import { publicProcedure, router } from "./trpc";
import { createLocation, deleteLocation, updateLocation, getAllLocations, findLocationById, getSingleLocation } from "./module/location";
import { createNews, deleteNews, getAllNews, updateNews } from "./module/news";
import { uploadImage } from "./module/cloudinary";
import { createOrganization, deleteOrganization, findOrganizationById, getAllOrganizations, getOrganizationByName, updateOrganization } from "./module/organization";
import { createPastor, deletePastor, getAllPastors, updatePastor } from "./module/pastors";

export const appRouter = router({
  createUser,
  updateUser,
  getAllUsers,
  deleteUser,
  createEvent,
  updateEvent,
  deleteEvent,
  getAllEvents,
  getAllLocations,
  createLocation,
  updateLocation,
  deleteLocation,
  createNews,
  updateNews,
  deleteNews,
  getAllNews,
  findLocationById,
  getSingleLocation,
  uploadImage,
  createOrganization,
  updateOrganization,
  deleteOrganization,
  getAllOrganizations,
  findOrganizationById,
  getOrganizationByName,
  createPastor,
  updatePastor,
  deletePastor,
  getAllPastors,
  healthCheck: publicProcedure.query(() => {
    return { message: "API up and running..." };
  }),
});

export type AppRouter = typeof appRouter;
