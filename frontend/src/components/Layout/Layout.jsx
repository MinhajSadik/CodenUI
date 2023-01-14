import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {router.pathname === '/' && <Footer />}
    </>
  );
}
