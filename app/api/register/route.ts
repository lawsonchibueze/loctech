import bcrypt from "bcryptjs";
import prisma from "@/prisma/prisma";

export const POST = async (req: Request) => {
  const { email, name, password, role } = await req.json();

  let newRole = role;

  if (!email) {
    return new Response("Email not found", { status: 400 });
  }

  if (email === "customercare@loctechng.com") {
    newRole = "ADMIN";
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = await prisma.user.create({
    data: {
      email,
      hashedPassword,
      name,
      role: newRole,
    },
  });

  return new Response(JSON.stringify(newUser), { status: 201 });
};
