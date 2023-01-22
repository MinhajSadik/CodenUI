import Head from 'next/head'
import React from 'react'
import { Banner, EmailTemplates, Layout } from '../src/components'

export default function email_templates() {
    return (
        <>
            <Head>
                <title>Email Templates</title>
                <meta name="description" content="Coden UI is a design and code-based platform that helps people grow their businesses with tons of ready-made templates." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

            </Head>
            <Layout>
                <Banner title="Email Templates" />
                <EmailTemplates />
            </Layout>
        </>
    )
}
