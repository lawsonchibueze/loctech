import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

interface AlumniParams {
  id: string;
}
export const GET = async (req: Request, params: AlumniParams) => {
  const { id } = params;
  const response = await prisma.alumni.findUnique({
    where: {
      id,
    },
  });
  return new Response(JSON.stringify(response), { status: 200 });
};

export const PATCH = async (req: Request, params: AlumniParams) => {
  await checkCurrentUser();

  const { id } = params;

  const {
    name,
    image,
    createdAt,
    updatedAt,
    currentlyWorking,
    designation,
    courseStudied,
  } = await req.json();

  const updatedAlumni = await prisma.alumni.update({
    where: {
      id,
    },
    data: {
      name,
      image,
      createdAt,
      updatedAt,
      currentlyWorking,
      designation,
      courseStudied,
    },
  });

  return new Response(JSON.stringify(updatedAlumni), { status: 200 });
};

export const DELETE = async (req: Request, params: AlumniParams) => {
  await checkCurrentUser();

  const { id } = params;

  const deletedAlumni = await prisma.alumni.delete({
    where: {
      id,
    },
  });

  return new Response("Deleted Successfully", {
    status: 200,
  });
};
