//api/users/[userId].ts
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient({ log: ['query', 'info'] });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { userId } = req.query;
    const allusers = await prisma.user.findUnique(
        {
            where: { id: userId.toString() },
            include: { tweets: true },
        }
    );
    res.status(200).json(allusers);
}