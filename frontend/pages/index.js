import Head from 'next/head';
import React, { useContext } from 'react';
import { CodedBlocks, CodedTemplates, EmailTemplates, Faq, Hero, IconPack, Layout, Pricing } from '../src/components';
import { AppContext } from '../src/contexts/contexts';



export default function Home() {
  const { route } = useContext(AppContext)

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Coden UI is a design and code-based platform that helps people grow their businesses with tons of ready-made templates." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Layout>
        <Hero />
        <CodedTemplates route={route} />
        <EmailTemplates route={route} />
        <IconPack route={route} />
        <CodedBlocks route={route} />
        <Pricing />
        <Faq />
      </Layout>
    </>
  );
}
