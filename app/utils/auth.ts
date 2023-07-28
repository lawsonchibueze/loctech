import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import prisma from "@/prisma/prisma";
import { User } from "@prisma/client";

import { encode, decode } from "next-auth/jwt";

const adapter = PrismaAdapter(prisma);

export const authOptions: NextAuthOptions = {
  adapter: adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string,
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
    signIn: async ({ user, account, profile, email, credentials }) => {
      if (user) {
        const checkedUser = await prisma.user.findUnique({
          where: {
            email: user.email as string,
          },
        });

        if (!checkedUser) {
          const newUser = await prisma.user.create({
            data: {
              email: user.email as string,
              name: user.name as string,
              image: user.image as string,
            },
          });

          await prisma.account.create({
            data: {
              userId: newUser.id,
              type: account?.type as string,
              provider: account?.provider as string,
              providerAccountId: account?.providerAccountId as string,
              access_token: account?.accessToken as string,
              refresh_token: account?.refreshToken as string,
              expires_at: account?.expires_at as number,
              scope: account?.scope as string,
              token_type: account?.token_type as string,
              id_token: account?.id_token as string,
            },
          });
        }
      }

      return true;
    },

    jwt: ({ token, user, profile, account }) => {
      const sessUser = user as User;

      return { ...token, ...sessUser };
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

  jwt: {
    encode: async ({ secret, token, maxAge }) => {
      return encode({ secret, token, maxAge });
    },

    decode: async ({ secret, token }) => {
      return decode({ secret, token });
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
