import { checkCurrentUser } from "@/app/utils/checkCurrentUser";
import prisma from "@/prisma/prisma";

export const GET = async (req: Request) => {
  const authors = await prisma.author.findMany();
  return new Response(JSON.stringify(authors), { status: 200 });
};

export const POST = async (req: Request) => {
  await checkCurrentUser();
  const { name, image, createdAt, updatedAt, post } = await req.json();

  const author = await prisma.author.create({
    data: {
      name,
      image,
      createdAt,
      updatedAt,
      post: {
        create: post,
      },
    },
  });

  return new Response(JSON.stringify(author), { status: 201 });
};
