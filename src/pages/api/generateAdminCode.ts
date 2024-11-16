import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import serverAuth from "@/libs/serverAuth";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get the current user's session
  

  // import to data source db for json file(from config file to the schema.prisma)
  // mariadb localnet for testing(auth will affected)
     
  

  const { currentUser } = await serverAuth(req, res);
//   const { days } = req.body;
  // Get the current user from the database
  if (!currentUser) {
    res.status(403).json({ message: "please login to generate token" });
    return;
  }
  if (
    currentUser.role === "super admin"
  ) {
    // Generate a new access token
    const token = crypto.randomBytes(64).toString("hex");

    const day = Number(1)
    // console.log(day)

    // const expiryDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * day);

    // Create a new access token in the database
   let newToken = await prisma.token.create({
     data: {
       token: token,
       expiryDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * day), // 24 hours from now
       userId: currentUser.id,
       isUsed: false
     },
   });

    res
      .status(200)
      .json({ message: "Access token generated successfully.", token: token,  newToken });

    return;
  }

  res
    .status(403)
    .json({ message: "You must be an admin to generate an access token." });
}