import { checkCurrentUser } from "@/app/utils/checkCurrentUser";
import prisma from "@/prisma/prisma";

export const GET = async () => {
  //route for getting all the instructors
  const response = await prisma.instructor.findMany({
    include: {
      Course: true,
    },
  });
  return new Response(JSON.stringify(response), { status: 200 });
};

export const POST = async (req: Request) => {
  await checkCurrentUser();
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

  //Check if there is a name cos all instructors must have a name
  if (!name) {
    return new Response("Instructor must have a name", {
      status: 400,
    });
  }

  const newInstructor = await prisma.instructor.create({
    data: {
      name,
      email,
      image,
      bio,
      rating,
      reviews,
      facebook,
      twitter,
      Course: {
        create: Course,
      },
      instagram,
      linkedin,
      reviewer,
      reviewerImage,
      reviewerComment,
    },
  });

  return new Response("Deleted Successfully", {
    status: 200,
  });
};
