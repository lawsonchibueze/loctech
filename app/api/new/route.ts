import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/prisma";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  // send a json response of 200 with a name in Next api route
  const response = await prisma.user.findMany();

  return new Response(JSON.stringify(response), { status: 200 });
};
