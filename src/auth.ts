//where the actual authentication happens

import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
//handler le authentication-related http request haru handle garxa
//signIn lai authentication garna
//signOut lai current user log out garna
//auth le kunai user authenticated xan ki nai ani xa bhane kun bhanera define garxa
//Provider bhaneko kunai service or method hun jasle user ko identity lai verify garxa
//Auth.js le aafaile authentication garnu parxa bhanne hudaina...Auth.js manages the authentication flow while Provider gives Auth.js a specific way to authenticate user.
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
    }),
  ],
};
