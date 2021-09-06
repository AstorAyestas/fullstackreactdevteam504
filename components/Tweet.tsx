import React from 'react'
import IData from '../utils/IData'
import { format } from 'date-fns'

export const Tweet: React.FC<{ tweet: IData }> = ({ tweet }) => {
    return (
        <article className="flex items-center w-2/4 space-x-2 space-y-2 bg-gray-700 rounded-md ">
            <img className="h-16 m-1 rounded-full" src={tweet.user.image} alt={tweet.user.name} />
            <div className="px-2">
                <strong className="text-gray-300">@{tweet.user.name}</strong>
                <p className="text-gray-100">{tweet.content}</p>
                <p className="text-gray-50">{format(new Date(tweet.createdAt), 'yy MMM dd kk:mm:ss aaa')}</p>
            </div>
        </article>
    )
}
