import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
export const POST = async (req: Request) => {
  const body = await req.json();

  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = await prisma.user.create({
    data: {
      email,
      hashedPassword,
      name,
    },
  });

  return NextResponse.json(newUser);
};
