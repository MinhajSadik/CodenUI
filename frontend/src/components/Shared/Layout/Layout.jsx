import React, { useContext } from 'react';
import { AppContext } from '../../../contexts/contexts';
import AppProvider from '../../../providers/AppProvider';
import ForgotPassword from '../../User/ForgotPassword';
import Login from '../../User/Login';
import Otp from '../../User/Otp';
import Register from '../../User/Register';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Layout({ children }) {
  const {
    loading,
    open,
    otpOpen,
    handleForgotClose,
    handleForgotOpen,
    opened,
    forgotOpen,
    handleOpen,
    handleSwitch,
    route,
    router,
    loggedIn,
  } = useContext(AppContext);
  const matchedRoute = route === '/' || route === '/pricing';

  return (
    <AppProvider>
      {!loading && (
        <>
          <Navbar handleOpen={handleOpen} loggedIn={loggedIn} router={router} />

          {open && (
            <Login
              handleSwitch={handleSwitch}
              handleForgotOpen={handleForgotOpen}
            />
          )}

          {forgotOpen && (
            <ForgotPassword
              handleOpen={handleOpen}
              handleForgotClose={handleForgotClose}
            />
          )}
          {otpOpen && <Otp handleOpen={handleOpen} />}

          {opened && <Register handleSwitch={handleSwitch} />}
          <main>{children}</main>

          {matchedRoute && <Footer />}
        </>
      )}
    </AppProvider>
  );
}
