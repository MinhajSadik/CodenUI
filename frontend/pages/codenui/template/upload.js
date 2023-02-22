import Head from 'next/head';
import React, { useContext } from 'react';
import { Dashboard, Template } from '../../../src/components';
import { AppContext } from '../../../src/contexts/contexts';

export default function upload() {
    const { categories } = useContext(AppContext)
    return (
        <>
            <Head>
                <title>Upload</title>
                <meta name="description" content="Coden UI is a design and code-based platform that helps people grow their businesses with tons of ready-made templates." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

            </Head>
            <Dashboard>
                <Template categories={categories} />
            </Dashboard>
        </>
    )
}
