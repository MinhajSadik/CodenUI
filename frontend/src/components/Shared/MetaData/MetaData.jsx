import Head from 'next/head';
import React from 'react';

export default function MetaData({ title }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
