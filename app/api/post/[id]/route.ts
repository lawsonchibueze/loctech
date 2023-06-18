import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

interface PostParams {
  id: string;
}
export const GET = async (req: Request, { params }: { params: PostParams }) => {
  const { id } = params;
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });
  return new Response(JSON.stringify(post), { status: 200 });
};

export const PATCH = async (
  req: Request,
  { params }: { params: PostParams }
) => {
  await checkCurrentUser();

  const { id } = params;
  const {
    title,
    subtitle,
    slug,
    image,
    content,
    createdAt,
    updatedAt,
    author,
    comment,
  } = await req.json();

  const updatedPost = await prisma.post.update({
    where: {
      id,
    },
    data: {
      title,
      subtitle,
      slug,
      image,

      content,
      createdAt,
      updatedAt,

      author: {
        update: author,
      },

      comment: {
        update: comment,
      },
    },
  });

  return new Response(JSON.stringify(updatedPost), {
    status: 200,
  });
};

export const DELETE = async (
  req: Request,
  { params }: { params: PostParams }
) => {
  await checkCurrentUser();

  const { id } = params;

  const deletedPost = await prisma.post.delete({
    where: {
      id,
    },
  });

  return new Response(JSON.stringify(deletedPost), {
    status: 200,
  });
};
