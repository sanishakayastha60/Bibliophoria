//where the actual authentication happens

import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
//handler le authentication-related http request haru handle garxa
//signIn lai authentication garna
//signOut lai current user log out garna
//auth le kunai user authenticated xan ki nai ani xa bhane kun bhanera define garxa
//Provider bhaneko kunai service or method hun jasle user ko identity lai verify garxa
//Auth.js le aafaile authentication garnu parxa bhanne hudaina...Auth.js manages the authentication flow while Provider gives Auth.js a specific way to authenticate user.
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
    }),
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      // security checkpoint
      async authorize(credentials) {
        // 1.Get email/password
        const email = credentials?.email;
        const password = credentials?.password;
        if (!email || !password) return null;
        //2.Find User
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        if (!user) return null;
        //3.Verify Password
        const isPasswordValid = await bcrypt.compare(
          password,
          user.password ?? "",
        );
        if (!isPasswordValid) return null;
        //4. Return user or null
        return user;
      },
    }),
  ],
};
