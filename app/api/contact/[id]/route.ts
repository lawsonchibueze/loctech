import prisma from "@/prisma/prisma";
import { checkCurrentUser } from "@/app/utils/checkCurrentUser";

interface ContactParams {
  id: string;
}

export const GET = async (
  req: Request,
  { params }: { params: ContactParams }
) => {
  const { id } = params;
  const response = await prisma.contactUS.findUnique({
    where: {
      id,
    },
  });
  return new Response(JSON.stringify(response), { status: 200 });
};

export const PATCH = async (
  req: Request,
  { params }: { params: ContactParams }
) => {
  await checkCurrentUser();

  const { id } = params;

  const { name, email, subject, message, createdAt, updatedAt } =
    await req.json();

  const updatedContact = await prisma.contactUS.update({
    where: {
      id,
    },
    data: {
      name,
      email,
      subject,
      message,
      createdAt,
      updatedAt,
    },
  });

  return new Response(JSON.stringify(updatedContact), { status: 200 });
};

export const DELETE = async (
  req: Request,
  { params }: { params: ContactParams }
) => {
  await checkCurrentUser();

  const { id } = params;

  const deletedContact = await prisma.contactUS.delete({
    where: {
      id,
    },
  });

  return new Response("Deleted Successfully", {
    status: 200,
  });
};
