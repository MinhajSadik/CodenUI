import Head from 'next/head';
import React from 'react';
import ChckoutBeforeLogin from '../src/components/User/ChckoutBeforeLogin';
import CheckoutAfterLogin from '../src/components/User/CheckoutAfterLogin';

export default function checkout() {
    return (
        <>
            <Head>
                <title>Checkout</title>
                <meta name="description" content="Coden UI is a design and code-based platform that helps people grow their businesses with tons of ready-made templates." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <ChckoutBeforeLogin />
            <CheckoutAfterLogin />
        </>
    )
}