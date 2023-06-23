import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

interface HeroParams {
  id?: string;
}

export const GET = async (req: Request, { params }: { params: HeroParams }) => {
  const { id } = params;

  const hero = await prisma.hero.findUnique({
    where: {
      id,
    },
  });

  return new Response(JSON.stringify(hero), { status: 200 });
};

export const PATCH = async (
  req: Request,
  { params }: { params: HeroParams }
) => {
  await checkCurrentUser();

  const { id } = params;

  const { title, subtitle, button, image, createdAt, updatedAt } =
    await req.json();

  const updatedHero = await prisma.hero.update({
    where: {
      id,
    },
    data: {
      title,
      subtitle,
      button,
      image,
      createdAt,
      updatedAt,
    },
  });

  return new Response(JSON.stringify(updatedHero), { status: 200 });
};

export const DELETE = async (
  req: Request,
  { params }: { params: HeroParams }
) => {
  await checkCurrentUser();

  const { id } = params;

  const deletedHero = await prisma.hero.delete({
    where: {
      id,
    },
  });

  return new Response("Deleted Successfully", {
    status: 200,
  });
};
