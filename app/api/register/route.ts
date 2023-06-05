import bcrypt from "bcryptjs";
import prisma from "@/prisma/prisma";

export const POST = async (req: Request) => {
  const { email, name, password } = await req.json();

  if (!email) {
    return new Response("Email not found", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = await prisma.user.create({
    data: {
      email,
      hashedPassword,
      name,
    
    },
  });

  return new Response(JSON.stringify(newUser), { status: 201 });
};
