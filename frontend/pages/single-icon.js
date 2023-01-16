import Head from 'next/head'
import React from 'react'
import Banner from '../src/components/Shared/Banner/Banner'
import Layout from '../src/components/Shared/Layout/Layout'
import SingleIcon from '../src/components/SingleIcon/SingleIcon'

export default function single_icon() {
    return (
        <>
            <Head>
                <title>Single Icon</title>
                <meta name="description" content="Coden UI is a design and code-based platform that helps people grow their businesses with tons of ready-made templates." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/icon.svg" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Layout>
                <Banner title="Single Icon" />
                <SingleIcon />
            </Layout>
        </>
    )
}
