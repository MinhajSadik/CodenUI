import Head from 'next/head'
import React from 'react'
import Layout from '../src/components/Shared/Layout/Layout'
import BillingBasic from '../src/components/User/Subscription/BillingBasic'
import BillingLifetime from '../src/components/User/Subscription/BillingLifetime'
import BillingYearly from '../src/components/User/Subscription/BillingYearly'


export default function billing() {
    return (
        <>
            <Head>
                <title>Billing</title>
                <meta name="description" content="Coden UI is a design and code-based platform that helps people grow their businesses with tons of ready-made templates." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <BillingBasic />
                <BillingYearly />
                <BillingLifetime />
            </Layout>
        </>
    )
}
