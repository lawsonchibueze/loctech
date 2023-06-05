import prisma from "@/prisma/prisma";

export const GET = async () => {
  const heroes = await prisma.hero.findMany();

  return new Response(JSON.stringify(heroes), { status: 200 });
};

export const POST = async (req: Request) => {
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

export const PATCH = async (req: Request) => {
  const { id, title, subtitle, button, image, createdAt, updatedAt } =
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

export const DELETE = async (req: Request) => {
  const { id } = await req.json();

  const deletedHero = await prisma.hero.delete({
    where: {
      id,
    },
  });

  return new Response(JSON.stringify(deletedHero), { status: 200 });
};
