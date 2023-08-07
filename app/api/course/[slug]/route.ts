import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

interface CourseParams {
  slug?: string;
}

export const GET = async (
  req: Request,
  { params }: { params: CourseParams }
) => {
  const { slug } = params;

  const course = await prisma.course.findUnique({
    where: {
      courseSlug: slug,
    },

    select: {
      courseTitle: true,
      imageSrc: true,
      createdAt: true,
      updatedAt: true,
      description: true,
      coursePrice: true,
      video: true,
      category: true,
      duration: true,
      learningObj: true,
      targetAud: true,
      prerequisites: true,
      courseSlug: true,
      curriculum: true,
      curriculumList: true,
      published: true,

      isFeatured: true,
      isOnline: true,
      isTrending: true,

      RelatedCourses: true,

      Instructor: {
        select: { name: true },
      },
    },
  });

  return new Response(JSON.stringify(course), { status: 200 });
};

export const PATCH = async (
  req: Request,
  { params }: { params: CourseParams }
) => {
  await checkCurrentUser();

  const { slug } = params;

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
      courseSlug: slug,
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

  const { slug } = params;

  const deletedCourse = await prisma.course.delete({
    where: {
      courseSlug: slug,
    },
  });

  return new Response("Deleted Successfully", {
    status: 200,
  });
};
