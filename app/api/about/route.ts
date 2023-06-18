import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

export const GET = async (req: Request) => {
  const contact = await prisma.about.findMany();
  return new Response(JSON.stringify(contact), { status: 200 });
};

export const POST = async (req: Request) => {
  await checkCurrentUser();
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

  const contact = await prisma.about.create({
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

  return new Response(JSON.stringify(contact), { status: 201 });
};
