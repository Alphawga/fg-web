import { createUser, deleteUser, getAllUsers, updateUser } from "./module/user";
import { createEvent, deleteEvent, getAllEvents, updateEvent } from "./module/events";
import { publicProcedure, router } from "./trpc";
import { createLocation, deleteLocation, updateLocation, getAllLocations, findLocationById, getSingleLocation } from "./module/location";
import { createNews, deleteNews, getAllNews, updateNews } from "./module/news";

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
  healthCheck: publicProcedure.query(() => {
    return { message: "API up and running..." };
  }),
});

export type AppRouter = typeof appRouter;
