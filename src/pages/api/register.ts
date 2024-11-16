import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  try {
    const { email, username,  name, password, adminCode, position } = req.body;

    const verficationCode = await prisma.token.findUnique({
      where: {
        token: adminCode,
      },
    });

    

    if (!verficationCode || verficationCode.isUsed) {
      res.status(404).json({ error: "Verification code not found, or has been used" });
    }


    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        role: "admin",
        isAllowed: false,
        hashedPassword,
        position,
        username
      },
    });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({error: "creating account"});
  }
}
