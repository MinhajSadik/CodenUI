import React, { memo, useContext } from 'react';
import {
  Footer,
  ForgotPassword,
  Login,
  Navbar,
  NewPassword,
  Otp,
  Register,
  ResetPasswordSucess,
} from '../../../components';
import { AppContext } from '../../../contexts/contexts';
import AppProvider from '../../../providers/AppProvider';

function Layout({ children }) {
  const {
    loading,
    open,
    user,
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
          <Navbar
            user={user}
            handleOpen={handleOpen}
            loggedIn={loggedIn}
            router={router}
          />

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

          {successOpen && <ResetPasswordSucess handleOpen={handleOpen} />}

          <main>{children}</main>

          {matchedRoute && <Footer />}
        </>
      )}
    </AppProvider>
  );
}

export default memo(Layout);
