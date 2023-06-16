import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

export const GET = async (req: Request) => {
  const contact = await prisma.contactUS.findMany();
  return new Response(JSON.stringify(contact), { status: 200 });
};

export const POST = async (req: Request) => {
  const { name, email, subject, message, createdAt, updatedAt } =
    await req.json();

  const contact = await prisma.contactUS.create({
    data: {
      name,
      email,
      subject,
      message,
      createdAt,
      updatedAt,
    },
  });

  return new Response(JSON.stringify(contact), { status: 201 });
};
