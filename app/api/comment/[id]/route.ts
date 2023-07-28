import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

interface CommentParams {
  id?: string;
}

export const GET = async (
  req: Request,
  { params }: { params: CommentParams }
) => {
  const { id } = params;
  const comments = await prisma.comment.findUnique({
    where: {
      id,
    },
  });

  return new Response(JSON.stringify(comments), { status: 200 });
};

export const PATCH = async (
  req: Request,
  { params }: { params: CommentParams }
) => {
  await checkCurrentUser();

  const { id } = params;
  const { name, email, createdAt, updatedAt, comment, post } = await req.json();

  const comments = await prisma.comment.update({
    where: {
      id,
    },
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

  return new Response(JSON.stringify(comments), {
    status: 200,
  });
};

export const DELETE = async (
  req: Request,
  { params }: { params: CommentParams } 
) => {
  await checkCurrentUser();

  const { id } = params;
  const comments = await prisma.comment.delete({
    where: {
      id,
    },
  });

  return new Response("Deleted Successfully", {
    status: 200,
  });
};
