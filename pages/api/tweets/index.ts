//api/users/index.ts
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient({ log: ['query', 'info'] });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const tweets = await prisma.tweet.findMany({
        include: { user: true }
    });
    res.status(200).json(tweets);
}