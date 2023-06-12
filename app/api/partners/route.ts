import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

export const GET = async (req: Request) => {
  const partners = await prisma.partners.findMany({});

  return new Response(JSON.stringify(partners), { status: 200 });
};

export const POST = async (req: Request) => {
  const { name, image, createdAt, updatedAt } = await req.json();

  const partner = await prisma.partners.create({
    data: {
      name,
      image,
      createdAt,
      updatedAt
    },
  });

  return new Response(JSON.stringify(partner), { status: 200 });
};
