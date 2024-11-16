import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";
import { userTransformer } from "@/libs/userTransformer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json(users.map(userTransformer));
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
