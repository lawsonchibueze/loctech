import { checkCurrentUser } from "@/app/utils/checkCurrentUser";
import prisma from "@/prisma/prisma";

export const GET = async (req: Request) => {
  const alumnis = await prisma.alumni.findMany();
  return new Response(JSON.stringify(alumnis), { status: 200 });
};

export const POST = async (req: Request) => {
  await checkCurrentUser();

  const {
    name,
    image,
    createdAt,
    updatedAt,
    currentlyWorking,
    designation,
    courseStudied,
  } = await req.json();

  const alumnis = await prisma.alumni.create({
    data: {
      name,
      image,
      createdAt,
      updatedAt,
      currentlyWorking,
      designation,
      courseStudied,
    },
  });

  return new Response(JSON.stringify(alumnis), { status: 201 });
};
