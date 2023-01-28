import React, { useContext } from 'react';
import { AppContext } from '../../../contexts/contexts';
import AppProvider from '../../../providers/AppProvider';
import Login from '../../User/Login';
import Register from '../../User/Register';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Layout({ children }) {
  // const { loading } = useAutoRefresh();
  const { open, opened, handleOpen, handleSwitch, route, loggedIn, dispatch } =
    useContext(AppContext);
  const matchedRoute = route === '/' || route === '/pricing';

  return (
    <AppProvider>
      <Navbar handleOpen={handleOpen} loggedIn={loggedIn} dispatch={dispatch} />

      {open && <Login handleSwitch={handleSwitch} />}

      {opened && <Register handleSwitch={handleSwitch} />}
      <main>{children}</main>

      {matchedRoute && <Footer />}
    </AppProvider>
  );
}
