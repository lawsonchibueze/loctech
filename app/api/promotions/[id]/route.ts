import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

interface PromotionsParams {
  id: string;
}

export const GET = async (
  req: Request,
  { params }: { params: PromotionsParams }
) => {
  const { id } = params;
  const response = await prisma.promotionsPage.findUnique({
    where: {
      id,
    },
  });
  return new Response(JSON.stringify(response), { status: 200 });
};

export const PATCH = async (
  req: Request,
  { params }: { params: PromotionsParams }
) => {
  await checkCurrentUser();

  const { id } = params;

  const { title, subtitle, image, createdAt, updatedAt } = await req.json();

  const updatedPromotions = await prisma.promotionsPage.update({
    where: {
      id,
    },
    data: {
      title,
      subtitle,
      image,
      createdAt,
      updatedAt,
    },
  });

  return new Response(JSON.stringify(updatedPromotions), { status: 200 });
};

export const DELETE = async (
  req: Request,
  { params }: { params: PromotionsParams }
) => {
  await checkCurrentUser();

  const { id } = params;

  const deletedPromotions = await prisma.promotionsPage.delete({
    where: {
      id,
    },
  });

  return new Response("Deleted Successfully", {
    status: 200,
  });
};
