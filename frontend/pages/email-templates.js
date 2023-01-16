import Head from 'next/head'
import React from 'react'
import EmailTemplates from '../src/components/EmailTemplates/EmailTemplates'
import Banner from '../src/components/Shared/Banner/Banner'
import Layout from '../src/components/Shared/Layout/Layout'

export default function email_templates() {
    return (
        <>
            <Head>
                <title>Email Templates</title>
                <meta name="description" content="Coden UI is a design and code-based platform that helps people grow their businesses with tons of ready-made templates." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/icon.svg" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Layout>
                <Banner title="Email Templates" />
                <EmailTemplates />
            </Layout>
        </>
    )
}
