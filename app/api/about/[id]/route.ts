import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

interface AboutParams {
  id?: string;
}

export const GET = async (req: Request, { params }: { params: AboutParams }) => {
  const { id } = params;
  const about = await prisma.about.findUnique({
    where: {
      id,
    },
  });

  
  return new Response(JSON.stringify(about), { status: 200 });
};

export const PATCH = async (req: Request, { params }: { params: AboutParams }) => {
  await checkCurrentUser();

  const { id } = params;
  const {
    title,
    content,
    mission,
    vision,
    subtitle,
    values,
    coverImage,
    gallery,
    image1,
    image2,
    image3,
    partners,
    createdAt,
    updatedAt,
  } = await req.json();

  const about = await prisma.about.update({
    where: {
      id,
    },
    data: {
      title,
      content,
      mission,
      vision,
      subtitle,
      values,
      coverImage,
      gallery,
      image1,
      image2,
      image3,
      partners,
      createdAt,
      updatedAt,
    },
  });

  return new Response(JSON.stringify(about), { status: 201 });
};

export const DELETE = async (req: Request, { params }: { params: AboutParams }) => {
  await checkCurrentUser();

  const { id } = params;
  const about = await prisma.about.delete({
    where: {
      id,
    },
  });

  return new Response(('Deleted Successfully'), {
    status: 200,
  });
};
