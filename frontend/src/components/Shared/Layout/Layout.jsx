import React, { useContext } from 'react';
import { AppContext } from '../../../contexts/contexts';
import AppProvider from '../../../providers/AppProvider';
import Login from '../../User/Login';
import Register from '../../User/Register';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Layout({ children }) {
  const { open, opened, handleOpen, handleSwitch, route } =
    useContext(AppContext);

  return (
    <AppProvider>
      <Navbar handleOpen={handleOpen} route={route} />

      {open && <Login handleSwitch={handleSwitch} />}

      {opened && <Register handleSwitch={handleSwitch} />}
      <main>{children}</main>

      {route === '/' && <Footer />}
    </AppProvider>
  );
}
