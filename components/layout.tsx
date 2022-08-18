import React from 'react'
import Link from 'next/link'
import s from "../styles/layout.module.css"

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className={s.layout}>
            <header className={s.header}><Link href="/"><a>Coffee Timer</a></Link></header>

            <main className={s.container}>
                {children}
            </main>
            <footer className={s.footer}>
                <Link href="https://github.com/dominikjuriga/coffee-timer">Repo.</Link>
                <p>Implemented by <Link href="https://github.com/dominikjuriga">Dominik Juriga</Link> from <Link href="https://djds.sk">DJDS</Link>.</p>
            </footer>
        </div >
    )
}

export default Layout