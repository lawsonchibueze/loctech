import prisma from "@/prisma/prisma";

export const GET = async () => {
  //route for getting all the instructors
  const response = await prisma.instructor.findMany();
  return new Response(JSON.stringify(response), { status: 200 });
};
