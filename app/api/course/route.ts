import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

export const GET = async (req: Request) => {
  const allCourses = await prisma.course.findMany({});

  return new Response(JSON.stringify(allCourses), { status: 200 });
};

export const POST = async (req: Request) => {
  await checkCurrentUser();
  const {
    name,
    image,
    createdAt,
    updatedAt,
    description,
    price,
    video,
    category,
    duration,
    learningObj,
    targetAud,
    prerequisites,
    slug,
    curriculum,
    curriculumList,
    published,
    instructorId,
    Instructor,
    RelatedCourses,
  } = await req.json();

  const course = await prisma.course.create({
    data: {
      name,
      image,
      createdAt,
      updatedAt,
      description,
      price,
      video,
      category,
      duration,
      learningObj,
      targetAud,
      prerequisites,
      slug,
      curriculum,
      curriculumList,
      published,
      instructorId,
      Instructor: {
        create: Instructor,
      },
      RelatedCourses: {
        create: RelatedCourses,
      },
    },
  });

  return new Response(JSON.stringify(course), { status: 200 });
};
