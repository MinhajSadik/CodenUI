import React from 'react';
import Head from 'next/head';
import Layout from '../src/components/Shared/Layout/Layout';
import AccountSetting from '../src/components/User/AccountSetting';

export default function account_setting() {
    return (
        <>
            <Head>
                <title>Account Setting</title>
                <meta name="description" content="Coden UI is a design and code-based platform that helps people grow their businesses with tons of ready-made templates." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

            </Head>
            <Layout>
                <AccountSetting />
            </Layout>
        </>
    )
}
