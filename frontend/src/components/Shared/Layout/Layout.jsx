import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

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
