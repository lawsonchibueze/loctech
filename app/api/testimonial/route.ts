import { checkCurrentUser } from "@/app/utils/checkCurrentUser";
import prisma from "@/prisma/prisma";

export const GET = async () => {
  const testimonials = await prisma.testimonial.findMany();

  return new Response(JSON.stringify(testimonials), { status: 200 });
};

export const POST = async (req: Request) => {
  await checkCurrentUser();

  const { name, image, review, createdAt, updatedAt } = await req.json();

  const newTestimonial = await prisma.testimonial.create({
    data: {
      name,
      image,
      review,
      createdAt,
      updatedAt,
    },
  });

  return new Response(JSON.stringify(newTestimonial), { status: 201 });
};


