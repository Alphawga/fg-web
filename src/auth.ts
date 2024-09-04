import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import prisma from "@/lib/prisma";
import { compare } from "bcryptjs";
import { Permission, Role } from "@prisma/client";

export const { handlers, auth } = NextAuth({
  trustHost: true,
  providers: [
    CredentialsProvider({
      id: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize ({ username, password }) {
        try {
          if (!password) return null;

          const user = await prisma.user.findFirst({
            where: {
              OR: [
                { email: username as string },
                { username: username as string }
              ]
            }
          });

          if (!user) return null;
          if (!(await compare(password as string, user.password))) return null;

          return user;
        } catch (error) {
          console.error(error);

          return null;
        }
      },
    })
  ],
  callbacks: {
    async jwt ({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.name = user.name;
        token.email = user.email;
      }

      return token;
    },
    async session ({ session, token }) {
      return {
        ...session,
        user: {
          id: token.sub,
          name: token.name,
          email: token.email,
        },
        ...(await getUserClaims(token.sub!)),
      };
    },
  },
});

async function getUserClaims (userId: string): Promise<{
  permissions: Permission[];
  roles: Role[];
}> {
  const permissions = new Set<Permission>();
  const roles = new Set<Role>();

  const claims = await prisma.claim.findMany({
    where: { user_id: userId, active: true },
    include: { permission: true, role: true }
  });

  claims.forEach(({ role, permission }) => {
    if (permission?.active) permissions.add(permission);
    if (role) roles.add(role);
  });

  const rolePermissions = await prisma.permissionRole.findMany({
    where: {
      active: true,
      role_name: { in: [...roles].map(({ name }) => name) },
      permission_id: { notIn: [...permissions].map(({ id }) => id) },
    },
    include: { permission: true }
  });

  rolePermissions.forEach(({ permission }) => permissions.add(permission));

  return {
    permissions: [...permissions],
    roles: [...roles],
  };
}
