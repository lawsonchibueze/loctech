import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

interface CourseParams {
  id?: string;
}

export const GET = async (
  req: Request,
  { params }: { params: CourseParams }
) => {
  const { id } = params;

  const course = await prisma.course.findUnique({
    where: {
      id,
    },
  });

  return new Response(JSON.stringify(course), { status: 200 });
};

export const PATCH = async (
  req: Request,
  { params }: { params: CourseParams }
) => {
  await checkCurrentUser();

  const { id } = params;

  const {
    courseTitle,
    imageSrc,
    createdAt,
    updatedAt,
    description,
    coursePrice,
    video,
    category,
    duration,
    learningObj,
    targetAud,
    prerequisites,
    courseSlug,
    curriculum,
    curriculumList,
    published,
    instructorId,
    isFeatured,
    isOnline,
    isTrending,
    Instructor,
    RelatedCourses,
  } = await req.json();

  const updatedCourse = await prisma.course.update({
    where: {
      id,
    },
    data: {
      courseTitle,
      imageSrc,
      createdAt,
      updatedAt,
      description,
      coursePrice,
      video,
      category,
      duration,
      learningObj,
      targetAud,
      prerequisites,
      courseSlug,
      curriculum,
      curriculumList,
      published,
      instructorId,
      isFeatured,
      isOnline,
      isTrending,
      Instructor: {
        update: Instructor,
      },
      RelatedCourses: {
        update: RelatedCourses,
      },
    },
  });

  return new Response(JSON.stringify(updatedCourse), { status: 200 });
};

export const DELETE = async (
  req: Request,
  { params }: { params: CourseParams }
) => {
  await checkCurrentUser();

  const { id } = params;

  const deletedCourse = await prisma.course.delete({
    where: {
      id,
    },
  });

  return new Response("Deleted Successfully", {
    status: 200,
  });
};
