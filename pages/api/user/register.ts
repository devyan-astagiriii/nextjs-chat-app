import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// create user
// required field: email, username, password
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      res.status(405).end();
    }

    const result = await prisma.user.create({
      data: {
        ...req.body,
      },
    });

    res.status(200).send({ message: "Register success!" });
  } catch (err: any) {
    console.log(err);
  }
}
