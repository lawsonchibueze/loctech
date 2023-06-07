import prisma from "@/prisma/prisma";

export const GET = async () => {
  //route for getting all the instructors
  const response = await prisma.instructor.findMany();
  return new Response(JSON.stringify(response), { status: 200 });
};

export const POST = async (req: Request) => {
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
      Course,
      instagram,
      linkedin,
      reviewer,
      reviewerImage,
      reviewerComment,
    },
  });

  return new Response(JSON.stringify(newInstructor), { status: 201 });
};

export const PATCH = async (req: Request) => {
  const {
    id,
    name,
    email,
    image,
    bio,
    rating,
    reviews,
    facebook,
    Course,
    twitter,
    instagram,
    linkedin,
    reviewer,
    reviewerImage,
    reviewerComment,
  } = await req.json();

  if (!id) {
    return new Response("No id found", { status: 400 });
  }

  const updatedInstructor = prisma.instructor.update({
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
      facebook,
      twitter,
      Course,
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
  const { id } = await req.json();

  if (!id) {
    return new Response("No id found", { status: 400 });
  }

  const deletedInstructor = prisma.instructor.delete({
    where: {
      id,
    },
  });

  return new Response(JSON.stringify(deletedInstructor), { status: 200 });
};
