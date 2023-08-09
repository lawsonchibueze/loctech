import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

interface InstructorParams {
  iname: string;
}

export const GET = async (
  req: Request,
  { params }: { params: InstructorParams }
) => {
  const { iname } = params;
  const instructor = await prisma.instructor.findUnique({
    where: {
      name: iname,
    },
  });
  return new Response(JSON.stringify(instructor), { status: 200 });
};

export const PATCH = async (
  req: Request,
  { params }: { params: InstructorParams }
) => {
  await checkCurrentUser();

  const { iname } = params;

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
      name: iname,
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

export const DELETE = async (
  req: Request,
  { params }: { params: InstructorParams }
) => {
  await checkCurrentUser();

  const { iname } = params;

  const deletedInstructor = await prisma.instructor.delete({
    where: {
      name: iname,
    },
  });

  return new Response("Deleted Successfully", {
    status: 200,
  });
};
