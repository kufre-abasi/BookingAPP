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
    const { userId } = req.query;
    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid ID");
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    const followerscount = await prisma.user.count({
      where: {
        followingIds: {
          has: userId,
        },
      },
    });
    let presentUser = userTransformer(existingUser);
    return res.status(200).json({
      ...presentUser,
      followerscount,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}