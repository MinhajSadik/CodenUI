import React, { useContext } from 'react';
import { AppContext } from '../../../contexts/contexts';
import AppProvider from '../../../providers/AppProvider';
import ForgotPassword from '../../User/ForgotPassword';
import Login from '../../User/Login';
import NewPassword from '../../User/NewPassword';
import Otp from '../../User/Otp';
import Register from '../../User/Register';
import ResetPasswordSucess from '../../User/ResetPasswordSucess';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Layout({ children }) {
  const {
    loading,
    open,
    otpOpen,
    handleCloseForgot,
    handleCloseNewPassword,
    handleOpenForgot,
    handleCloseOtp,
    newPassOpen,
    opened,
    appLoading,
    successOpen,
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

          {opened && <Register handleSwitch={handleSwitch} />}
          {open && (
            <Login
              handleSwitch={handleSwitch}
              handleOpenForgot={handleOpenForgot}
            />
          )}

          {forgotOpen && (
            <ForgotPassword
              handleOpen={handleOpen}
              handleCloseForgot={handleCloseForgot}
            />
          )}

          {otpOpen && (
            <Otp handleOpen={handleOpen} handleCloseOtp={handleCloseOtp} />
          )}

          {newPassOpen && (
            <NewPassword
              handleOpen={handleOpen}
              handleCloseNewPassword={handleCloseNewPassword}
            />
          )}

          <ResetPasswordSucess handleOpen={handleOpen} />

          <main>{children}</main>

          {matchedRoute && <Footer />}
        </>
      )}
    </AppProvider>
  );
}
