import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

interface AuthorParams {
  id: string;
}
export const GET = async (req: Request, params: AuthorParams) => {
  const { id } = params;
  const response = await prisma.author.findUnique({
    where: {
      id,
    },
  });
  return new Response(JSON.stringify(response), { status: 200 });
};

export const PATCH = async (req: Request, params: AuthorParams) => {
  await checkCurrentUser();

  const { id } = params;

  const { name, image, createdAt, updatedAt, post } = await req.json();

  const updatedAuthor = await prisma.author.update({
    where: {
      id,
    },
    data: {
      name,
      image,
      createdAt,
      updatedAt,
      post: {
        update: post,
      },
    },
  });

  return new Response(JSON.stringify(updatedAuthor), { status: 200 });
};

export const DELETE = async (req: Request, params: AuthorParams) => {
  await checkCurrentUser();

  const { id } = params;

  const deletedAuthor = await prisma.author.delete({
    where: {
      id,
    },
  });

  return new Response("Deleted Successfully", {
    status: 200,
  });
};
