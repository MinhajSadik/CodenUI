import React from 'react';

import Head from 'next/head';
import { Template } from '../../../src/components';

export default function upload() {
    return (
        <>
            <Head>
                <title>Upload</title>
                <meta name="description" content="Coden UI is a design and code-based platform that helps people grow their businesses with tons of ready-made templates." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

            </Head>
            <Template />
        </>
    )
}
