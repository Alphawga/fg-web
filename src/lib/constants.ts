export const USER_ROLES = {
  SUPER_ADMIN: "super-admin",
  SCHOOL_OWNER: "school-owner",
  TEACHER: "teacher",
  PARENT: "parent",
  STUDENT: "student",
};

export const ROLE_PERMISSIONS: Record<string, string[]> = {
  [USER_ROLES.SUPER_ADMIN]: [
    "Home",
    "School",
    "Admission",
    "Classes",
    "Settings",
    "Attendance",
  ],
  [USER_ROLES.SCHOOL_OWNER]: ["Home", "School", "Admission", "Classes", "Attendance", "Settings"],
  [USER_ROLES.TEACHER]: ["Home", "Classes"],
  [USER_ROLES.PARENT]: ["Home"],
  [USER_ROLES.STUDENT]: ["Home", "Classes"],
};

export const classes = [] as const;

export const campaignStatus = [
  { label: "PENDING", value: "PENDING" },
  { label: "ONGOING", value: "ONGOING" },
  { label: "ENDED", value: "ENDED" },
] as const;
