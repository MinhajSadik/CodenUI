import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import CodedBlocks from '../src/components/CodedBlocks/CodedBlocks';
import CodedTemplates from '../src/components/CodedTemplates/CodedTemplates';
import EmailTemplates from '../src/components/EmailTemplates/EmailTemplates';
import Faq from '../src/components/Faq/Faq';
import Hero from '../src/components/Hero/Hero';
import IconPack from '../src/components/IconPack/IconPack';
import Pricing from '../src/components/Pricing/Pricing';
import Layout from '../src/components/Shared/Layout/Layout';

export default function Home() {
  const { route } = useRouter()
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
