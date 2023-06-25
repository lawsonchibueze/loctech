import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import prisma from "@/prisma/prisma";
import { User } from "@prisma/client";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },

      // profile(profile, tokens) {
      //   return {
      //     id: profile.id,
      //     name: profile.name,
      //     email: profile.email,
      //     image: profile.picture,
      //     then: () => {
      //       console.log(profile);
      //       return {
      //         name: profile.name,
      //         email: profile.email,
      //         image: profile.picture,
      //         accessToken: tokens.access_token,
      //         refreshToken: tokens.refresh_token,
      //       };
      //     },
      //   };
      // },
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid Credentials");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("Invalid Credentials");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid Credentials");
        }

        return { ...user };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user, profile }) => {
      console.log('token', token);
      const sessUser = user as User;

      return { ...token, ...sessUser };
    },

    signIn: async ({ user, account, profile, email, credentials }) => {
      const checkedUser = await prisma.user.findUnique({
        where: {
          email: user.email as string,
        },
      });

      if (!checkedUser) {
        await prisma.user.create({
          data: {
            email: user.email as string,
            name: user.name as string,
            image: user.image as string,
            role: "USER",
          },
        });
      }

      return true;
    },

    session: async ({ session, token, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
        },
      };
    },
  },

  pages: {
    //TODO: Get the real signin page from Nnaemeka
    signIn: "/signIn",
  },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
