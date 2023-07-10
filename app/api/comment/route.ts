import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

export const GET = async (req: Request) => {
  const comments = await prisma.comment.findMany();

  return new Response(JSON.stringify(comments), { status: 200 });
};

export const POST = async (req: Request) => {
  await checkCurrentUser();

  const { name, email, createdAt, updatedAt, comment, post } = await req.json();

  const comments = await prisma.comment.create({
    data: {
      name,
      email,
      createdAt,
      updatedAt,
      comment,
      Post: {
        create: post,
      },
    },
  });
};
