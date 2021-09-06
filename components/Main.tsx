import React from 'react'

interface MainProps {
    children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
    return (
        <main className="flex flex-col items-center gap-2 my-2">
            {children}
        </main>
    )
}