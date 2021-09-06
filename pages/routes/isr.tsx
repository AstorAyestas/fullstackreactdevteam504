import { PrismaClient } from '@prisma/client';
import { GetStaticProps } from 'next'
import { Tweet } from '../../components/Tweet'
import IData from '../../utils/IData'
const prisma = new PrismaClient({ log: ['query', 'info'] });

type ISRPageProps = {
    tweets: IData[];
};

const Isr = ({ tweets }: ISRPageProps) => {
    return (
        tweets.map((tweet => <Tweet key={tweet.id} tweet={tweet} />))
    )
}
export default Isr;

export const getStaticProps: GetStaticProps = async () => {
    //const res = await fetch('http://localhost:3000/api/tweets')
    //const tweets = await res.json()
    const tweets = await prisma.tweet.findMany({
        include: { user: true }
    });

    return {
        props: { tweets: JSON.parse(JSON.stringify(tweets)) },
        revalidate: 10
    }
}
