import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Login from '../../Auth/Login';
import Register from '../../Auth/Register';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Layout({ children }) {
  const router = useRouter();
  const [loginOpened, setLoginOpened] = useState(false);
  const [registerOpened, setRegisterOpened] = useState(false);

  function handleLoginToggle() {
    setLoginOpened(true);
  }

  function handleRegisterToggle() {
    setRegisterOpened(true);
    setLoginOpened(false);
  }

  return (
    <>
      <Navbar handleLoginToggle={handleLoginToggle} />

      {loginOpened && <Login handleRegisterToggle={handleRegisterToggle} />}

      {registerOpened && <Register />}

      <main>{children}</main>
      {router.pathname === '/' && <Footer />}
    </>
  );
}
