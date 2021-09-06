import React, { useState, useEffect } from 'react'
import { Tweet } from '../../components/Tweet'
import IData from '../../utils/IData'
const Csr = () => {
    const [tweets, setTweets] = useState<IData[]>()

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3000/api/tweets')
                .then(res => res.json())
                .then(data => setTweets(data));
        }, 1000)
    }, [])

    if (tweets) {
        return (
            tweets.map((tweet => <Tweet key={tweet.id} tweet={tweet} />))
        )
    }
    else {
        return (
            <div className="text-2xl text-center text-gray-200">
                loading...
            </div>
        )
    }

}
export default Csr;