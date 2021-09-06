import { User } from ".prisma/client";

export default interface IData {
    id: string;
    content: string;
    createdAt: Date;
    userId: string;
    user: User;
}