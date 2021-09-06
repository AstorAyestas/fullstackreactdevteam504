import React from 'react'
import Link from 'next/link';
const Nav = () => {
    return (
        <nav className="w-6/12">
            <ul className="text-xl text-center text-gray-300">
                <li className="hover:underline">
                    <Link href='/routes/csr'>
                        <a>CSR - Client-Side Rendering</a>
                    </Link>
                </li>
                <li className="hover:underline">

                    <Link href='/routes/ssr'>
                        <a>SSR - Server-Side Rendering</a>
                    </Link>
                </li>
                <li className="hover:underline">
                    <Link href='/routes/ssg'>
                        <a>SSG - Static Site Generation</a>
                    </Link>
                </li>
                <li className="hover:underline">
                    <Link href='/routes/isr'>
                        <a>ISR – Incremental Static Regeneration</a>
                    </Link>
                </li>
            </ul>
        </nav>

    )
}

export default Nav