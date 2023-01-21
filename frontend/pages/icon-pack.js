import Head from 'next/head'
import React from 'react'
import IconPack from '../src/components/IconPack/IconPack'
import Banner from '../src/components/Shared/Banner/Banner'
import Layout from '../src/components/Shared/Layout/Layout'

export default function icon_pack() {
    return (
        <>
            <Head>
                <title>Icon Pack</title>
                <meta name="description" content="Coden UI is a design and code-based platform that helps people grow their businesses with tons of ready-made templates." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <Banner title="Icon Pack" />
                <IconPack />
            </Layout>
        </>
    )
}
