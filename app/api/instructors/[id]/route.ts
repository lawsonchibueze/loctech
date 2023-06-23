import { checkCurrentUser } from "@/app/utils/checkCurrentUser";
import prisma from "@/prisma/prisma";

interface CIParams {
  id?: string;
}

export const GET = async (req: Request, { params }: { params: CIParams }) => {
  const { id } = params;

  const course = await prisma.instructor.findUnique({
    where: {
      id,
    },
    include: {
      Course: true,
    },
  });

  return new Response(JSON.stringify(course), { status: 200 });
};

export const PATCH = async (req: Request, { params }: { params: CIParams }) => {
  await checkCurrentUser();

  const { id } = params;

  const {
    name,
    email,
    image,
    bio,
    rating,
    reviews,
    Course,
    facebook,
    twitter,
    instagram,
    linkedin,
    reviewer,
    reviewerImage,
    reviewerComment,
  } = await req.json();

  const updatedInstructor = await prisma.instructor.update({
    where: {
      id,
    },
    data: {
      name,
      email,
      image,
      bio,
      rating,
      reviews,
      Course: {
        update: Course,
      },
      facebook,
      twitter,
      instagram,
      linkedin,
      reviewer,
      reviewerImage,
      reviewerComment,
    },
  });

  return new Response(JSON.stringify(updatedInstructor), { status: 200 });
};

export const DELETE = async (req: Request) => {
  await checkCurrentUser();

  const { id } = await req.json();

  const deletedInstructor = await prisma.instructor.delete({
    where: {
      id,
    },
  });

  return new Response("Deleted Successfully", {
    status: 200,
  });
};
