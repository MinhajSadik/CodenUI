import Head from 'next/head';
import React from 'react';
import Dashboard from '../src/components/Dashboard/Dashboard';

export default function dashboard() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Coden UI is a design and code-based platform that helps people grow their businesses with tons of ready-made templates." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/icon.svg" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Dashboard />
        </>
    )
}


