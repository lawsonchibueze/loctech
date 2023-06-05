import prisma from "@/prisma/prisma";

export const GET = async () => {
  const testimonials = await prisma.testimonial.findMany();

  return new Response(JSON.stringify(testimonials), { status: 200 });
};

export const POST = async (req: Request) => {
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

export const PATCH = async (req: Request) => {
  const { id, name, image, review, createdAt, updatedAt } = await req.json();

  const updatedTestimonial = await prisma.testimonial.update({
    where: {
      id,
    },
    data: {
      name,
      image,
      review,
      createdAt,
      updatedAt,
    },
  });

  return new Response(JSON.stringify(updatedTestimonial), { status: 200 });
};

export const DELETE = async (req: Request) => {
  const { id } = await req.json();

  const deletedTestimonial = await prisma.testimonial.delete({
    where: {
      id,
    },
  });

  return new Response(JSON.stringify(deletedTestimonial), { status: 200 });
};
