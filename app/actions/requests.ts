import prisma from "@/prisma/prisma";

export async function getCourseDetail(slug: string) {
  const course = await prisma.course.findUnique({
    where: {
      courseSlug: slug,
    },
  });

  if (!course) {
    return null;
  }

  return course;
}

export async function deleteCourse(slug: string) {
  const course = await prisma.course.delete({
    where: {
      courseSlug: slug,
    },
  });

  if (!course) {
    return null;
  }

  return course;
}
