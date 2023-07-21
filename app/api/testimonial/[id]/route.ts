import { checkCurrentUser } from "@/app/utils/checkCurrentUser";
import prisma from "@/prisma/prisma";

interface CIParams {
  id?: string;
}

export const GET = async (req: Request, params: CIParams) => {
  const { id } = params;

  const testimonial = await prisma.testimonial.findUnique({
    where: {
      id,
    },
  });

  return new Response(JSON.stringify(testimonial), { status: 200 });
};

export const PATCH = async (req: Request, params: CIParams) => {
  await checkCurrentUser();

  const { id } = params;

  const { name, image, review } = await req.json();

  const updatedTestimonial = await prisma.testimonial.update({
    where: {
      id,
    },
    data: {
      name,
      review,
      image,
    },
  });

  return new Response(JSON.stringify(updatedTestimonial), { status: 200 });
};

export const DELETE = async (req: Request, params: CIParams) => {
  await checkCurrentUser();

  const { id } = params;

  const deletedTestimonial = await prisma.testimonial.delete({
    where: {
      id,
    },
  });

  return new Response("Deleted Successfully", {
    status: 200,
  });
};
