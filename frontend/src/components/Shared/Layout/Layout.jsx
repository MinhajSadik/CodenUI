import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Login from '../../User/Login';
import Register from '../../User/Register';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const [loginOpened, setLoginOpened] = useState(false);
  const [registerOpened, setRegisterOpened] = useState(false);

  function handleLoginToggle() {
    setLoginOpened(true);
    setRegisterOpened(false);
  }

  function handleRegisterToggle() {
    setRegisterOpened(true);
    setLoginOpened(false);
  }

  return (
    <>
      <Navbar handleLoginToggle={handleLoginToggle} />

      {loginOpened && <Login handleRegisterToggle={handleRegisterToggle} />}

      {registerOpened && <Register handleLoginToggle={handleLoginToggle} />}
      <main>{children}</main>

      {pathname === '/' && <Footer />}
    </>
  );
}
