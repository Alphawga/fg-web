import * as fs from "fs/promises";
import { ParseArgsConfig } from "util";
import { PrismaClient } from "@prisma/client";
import { parseArgs } from "node:util";
import { USER_ROLES } from "@/lib/constants";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();
const config: ParseArgsConfig = { options: { environment: { type: "string" } } };

async function seedUsers () {
  const superAdmin = {
    name: "Super Admin",
    email: "fullgospel.super.admin@yopmail.com",
    password: "secret"
  };

  await prisma.user.upsert({
    where: { email: superAdmin.email },
    update: {
      name: superAdmin.name,
      claims: {
        createMany: {
          data: [{ role_name: USER_ROLES.SUPER_ADMIN, type: "ROLE" }],
          skipDuplicates: true
        }
      },
    },
    create: {
      ...superAdmin,
      password: bcrypt.hashSync(superAdmin.password, 10),
      claims: { create: { role_name: USER_ROLES.SUPER_ADMIN, type: "ROLE" } },
    }
  });

  console.log("Users seeding complete");
}

async function seedPermissionsAndRoles () {
  interface Permission {
    name: string;
    module: string;
    action: string;
    active: boolean;
    resource_id?: string;
  }

  interface Role {
    name: string;
    active: boolean;
    built_in: boolean;
    permission_names: string[];
  }

  const permissions = JSON.parse(await fs.readFile("./prisma/seed-data/dev/permissions.json", "utf-8")) as Permission[];
  const rolesJson = JSON.parse(await fs.readFile("./prisma/seed-data/dev/roles.json", "utf-8")) as Role[];

  await prisma.permission.createMany({
    data: permissions.map((item) => ({ ...item, active: true })),
    skipDuplicates: true,
  });

  console.log("Permissions seeding complete");

  for (const { name, active, built_in, permission_names } of rolesJson) {
    const validRolePermissionNames = permissions.filter(({ name }) => permission_names.includes(name)).map(({ name }) => name);
    const validRolePermissions = (await prisma.permission.findMany({ where: { name: { in: validRolePermissionNames } } })).map(({ id, name }) => ({ id, name }));

    await prisma.role.upsert({
      where: { name },
      update: {
        active,
        permissions: {
          createMany: {
            data: validRolePermissions.map(({ id }) => ({
              active,
              permission_id: id
            })),
            skipDuplicates: true,
          }
        }
      },
      create: {
        name,
        built_in: built_in,
        active: true,
        permissions: {
          createMany: {
            data: validRolePermissions.map(({ id }) => ({
              active,
              permission_id: id
            })),
            skipDuplicates: true,
          }
        }
      }
    });
  }

  console.log("Roles seeding complete");
}

async function seedLocations () {
  await prisma.location.createMany({
    data: [
      {
        id: "1",
        name: "Location One",
        address: "123 Main St",
        city: "Hometown",
        state: "HT",
        country: "Countryland",
        postal_code: "12345",
        default: true,
      },
      {
        id: "2",
        name: "Location Two",
        address: "456 Elm St",
        city: "Big City",
        state: "BC",
        country: "Countryland",
        postal_code: "67890",
        default: false,
      },
      {
        id: "3",
        name: "Location Three",
        address: "456 sabo yaba",
        city: "lagos",
        state: "oshodi",
        country: "skyland",
        postal_code: "067890",
        default: false,
      },
      {
        id: "4",
        name: "forth Location",
        address: "111 bariga",
        city: "small City",
        state: "SC",
        country: "funnyland",
        postal_code: "8607890",
        default: false,
      },
      {
        id: "5",
        name: "Location fift",
        address: "456 oyingbo yaba",
        city: "rivers",
        state: "oshodbssi",
        country: "waterland",
        postal_code: "967890",
        default: false,
      },
    ],
    skipDuplicates: true,
  });

  console.log("Locations seeding complete");
}

async function seedDev () {
  try {
    await seedPermissionsAndRoles();
    await seedUsers();
    await seedLocations();
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function seedProd () {
  try {
    await seedPermissionsAndRoles();
    await seedUsers();
    await seedLocations();
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function main () {
  const { values: { environment } } = parseArgs(config);

  if (environment?.toString()?.toLocaleLowerCase()
    ?.includes("prod")) {
    await seedProd();

    return;
  }

  await seedDev();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
