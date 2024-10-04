// NB: Do not add "use client" to this file if you want to build links
// using server side session data like user roles or permissions
import { LuLayoutDashboard, LuUser } from "react-icons/lu";
import { IoLocation } from "react-icons/io5";
import { MdEventNote } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaNewspaper } from "react-icons/fa6";

export const links = [
  {
    name: "Home",
    url: "/admin",
    icon: <LuLayoutDashboard className="size-5 mr-2" />,
  },
  {
    name: "Users",
    url: "/admin/users",
    icon: <LuUser data-cy="schoolIcon" className="size-5 mr-2" />,
  },
  {
    name: "Location",
    url: "/admin/locations",
    icon: <IoLocation data-cy="admissionIcon" className="size-5 mr-2" />,
  },
  {
    name: "Events",
    url: "/admin/events",
    icon: <MdEventNote  data-cy="eventIcon" className="size-5 mr-2" />,
  },
  {
    name: "Organization",
    url: "/admin/orgs",
    icon: <IoLocationOutline  data-cy="locationIcon" className="size-5 mr-2" />,
  },
  {
    name: "Pastors",
    url: "/admin/pastors",
    icon: <LuUser  data-cy="locationIcon" className="size-5 mr-2" />,
  },
  {
    name: "News",
    url: "/admin/news",
    icon: <FaNewspaper  data-cy="newsIcon" className="size-5 mr-2" />,
  },
];

export type Links = (typeof links)[number];
