import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';
import { AccountSetting, Layout } from '../src/components';

export default function account_setting() {
    const { user: { email } } = useSelector((state) => state.user)

    return (
        <>
            <Head>
                <title>Account Setting</title>
                <meta name="description" content="Coden UI is a design and code-based platform that helps people grow their businesses with tons of ready-made templates." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

            </Head>
            <Layout>
                <AccountSetting email={email} />
            </Layout>
        </>
    )
}
