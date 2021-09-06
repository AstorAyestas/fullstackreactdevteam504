import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { Header } from '../components/Header'
import { Main } from '../components/Main'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <React.Fragment>
            <Header />
            <Main >
                <Component {...pageProps} />
            </Main>
        </React.Fragment>)
}
export default MyApp
