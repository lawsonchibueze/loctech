import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

interface HeroParams {
  id?: string;
}

export const GET = async () => {
  const heroes = await prisma.hero.findMany();

  return new Response(JSON.stringify(heroes), { status: 200 });
};

export const POST = async (req: Request) => {
  // Get the current user and check if he is an admin
  await checkCurrentUser();

  const { title, subtitle, button, image, createdAt, updatedAt } =
    await req.json();

  const newHero = await prisma.hero.create({
    data: {
      title,
      subtitle,
      button,
      image,
      createdAt,
      updatedAt,
    },
  });

  return new Response(JSON.stringify(newHero), { status: 201 });
};
