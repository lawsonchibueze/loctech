import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

export const GET = async (req: Request) => {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return new Response(JSON.stringify(posts), { status: 200 });
};

export const POST = async (req: Request) => {
  await checkCurrentUser();

  const {
    title,
    subtitle,
    postSlug,
    image,
    content,
    createdAt,
    updatedAt,
    author,
    comment,
  } = await req.json();

  const post = await prisma.post.create({
    data: {
      title,
      subtitle,
      postSlug,
      image,
      content,
      createdAt,
      updatedAt,
      author: {
        create: author,
      },
      comment: {
        create: comment,
      },
    },
  });

  return new Response(JSON.stringify(post), { status: 201 });
};
