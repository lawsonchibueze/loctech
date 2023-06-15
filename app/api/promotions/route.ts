import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

export const GET = async (req: Request) => {
  const promotions = await prisma.promotionsPage.findMany();
  return new Response(JSON.stringify(promotions), { status: 200 });
};

export const POST = async (req: Request) => {
  await checkCurrentUser();

  const { title, subtitle, image, createdAt, updatedAt } = await req.json();

  const promotions = await prisma.promotionsPage.create({
    data: {
      title,
      subtitle,
      image,
      createdAt,
      updatedAt,
    },
  });

  return new Response(JSON.stringify(promotions), { status: 201 });
};
