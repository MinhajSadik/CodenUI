import React, { useContext } from 'react';
import { AppContext } from '../../../contexts/contexts';
import { useAutoRefresh } from '../../../hooks/useAutoRefresh';
import AppProvider from '../../../providers/AppProvider';
import Login from '../../User/Login';
import Register from '../../User/Register';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Layout({ children }) {
  const { loading } = useAutoRefresh();
  const { open, opened, handleOpen, handleSwitch, router, loggedIn } =
    useContext(AppContext);
  const { pathname: route } = router;
  const matchedRoute = route === '/' || route === '/pricing';

  return (
    <AppProvider>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Navbar handleOpen={handleOpen} loggedIn={loggedIn} />

          {open && <Login handleSwitch={handleSwitch} />}

          {opened && <Register handleSwitch={handleSwitch} />}
          <main>{children}</main>

          {matchedRoute && <Footer />}
        </>
      )}
    </AppProvider>
  );
}
