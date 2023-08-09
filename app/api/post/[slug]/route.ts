import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

interface PostParams {
  slug: string;
}
export const GET = async (req: Request, { params }: { params: PostParams }) => {
  const { slug } = params;
  const post = await prisma.post.findUnique({
    where: {
      postSlug: slug,
    },
    
    select: {
      content: true,
      createdAt: true,
      image: true,
      postSlug: true,
      subtitle: true,
      title: true,
      updatedAt: true,
      id: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return new Response(JSON.stringify(post), { status: 200 });
};

export const PATCH = async (
  req: Request,
  { params }: { params: PostParams }
) => {
  await checkCurrentUser();

  const { slug } = params;

  const {
    title,
    subtitle,
    postSlug,
    image,
    content,
    createdAt,
    updatedAt,
    author,
  } = await req.json();

  const updatedPost = await prisma.post.update({
    where: {
      postSlug: slug,
    },
    data: {
      title,
      subtitle,
      postSlug,
      image,
      content,
      createdAt,
      updatedAt,

      author: {
        update: author,
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

  const { slug } = params;

  const deletedPost = await prisma.post.delete({
    where: {
      postSlug: slug,
    },
  });

  return new Response("Deleted Successfully", {
    status: 200,
  });
};
