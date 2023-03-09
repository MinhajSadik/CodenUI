import Head from 'next/head';
import React, { useContext } from 'react';
import { Layout, Login } from '../src/components';
import { AppContext } from '../src/contexts/contexts';

export default function login() {
    const { open, handleSwitch, handleOpenForgot } = useContext(AppContext)
    return (
        <div>
            <Head>
                <title>Login</title>
                <meta name="description" content="Coden UI is a design and code-based platform that helps people grow their businesses with tons of ready-made templates." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <Login
                    handleSwitch={handleSwitch}
                    handleOpenForgot={handleOpenForgot}
                />
            </Layout>
        </div>
    )
}

