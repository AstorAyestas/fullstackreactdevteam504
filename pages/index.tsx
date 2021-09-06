import type { NextPage } from 'next'
import React from 'react'
import Nav from '../components/Nav'

const Home: NextPage = () => {
    return (
        <React.Fragment>
            <h1 className="text-2xl text-center text-blue-300">Tweet app for Devteam 504 community</h1>
            <Nav />
        </React.Fragment>
    )
}

export default Home
