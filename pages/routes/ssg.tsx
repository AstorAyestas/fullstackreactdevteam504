import { PrismaClient } from '@prisma/client';
import { GetStaticProps } from 'next'
import { Tweet } from '../../components/Tweet'
import IData from '../../utils/IData'
const prisma = new PrismaClient({ log: ['query', 'info'] });

type SSGPageProps = {
    tweets: IData[];
};

const Ssg = ({ tweets }: SSGPageProps) => {
    return (
        tweets.map((tweet => <Tweet key={tweet.id} tweet={tweet} />))
    )

}
export default Ssg;

export const getStaticProps: GetStaticProps = async () => {
    const tweets = await prisma.tweet.findMany({
        include: { user: true }
    });
    return {
        props: { tweets: JSON.parse(JSON.stringify(tweets)) }
    }
}