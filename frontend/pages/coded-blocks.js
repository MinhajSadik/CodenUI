import Head from 'next/head';
import React from 'react';
import CodedBlocks from '../src/components/CodedBlocks/CodedBlocks';
import Banner from '../src/components/Shared/Banner/Banner';
import Layout from '../src/components/Shared/Layout/Layout';

export default function coded_blocks() {
    return (
        <>
            <Head>
                <title>Coded Blocks</title>
                <meta name="description" content="Coden UI is a design and code-based platform that helps people grow their businesses with tons of ready-made templates." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <Banner title="Coded Blocks" />
                <CodedBlocks />
            </Layout>
        </>
    )
}
