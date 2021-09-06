import { GetServerSideProps } from 'next'
import { Tweet } from '../../components/Tweet'
import IData from '../../utils/IData'

type SSGPageProps = {
    tweets: IData[];
};

const Ssr = ({ tweets }: SSGPageProps) => {
    return (
        tweets.map((tweet => <Tweet key={tweet.id} tweet={tweet} />))
    )
}
export default Ssr;

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/tweets')
    const tweets = await res.json()
    return {
        props: { tweets }
    }
}
