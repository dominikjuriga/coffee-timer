import React from 'react'
import Head from 'next/head'

interface Props {
    title?: string,
    metaTitle?: string,
}

const Seo = ({ title = "", metaTitle = "Coffee Timer helps you extract the good stuff from the beans." }: Props) => {
    const message = `${title ? `${title} | ` : ``} Coffee Timer`
    return (
        <Head>
            <title>{message}</title>
            <meta name="description" content={metaTitle} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Seo