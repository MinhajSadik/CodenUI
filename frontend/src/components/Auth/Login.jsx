import React from 'react';
import GoogleIcon from '../../assets/img/icon/logos_google-icon.svg';
import Logo from '../../assets/img/logo/CodenUILogo.svg';
import NextImage from '../Shared/Image/NextImage';

export default function Login({ handleRegisterToggle }) {
  return (
    <div className="cu_sing_in_wrapper">
      <div className="cu_sign_in">
        <NextImage className="cu_sign_up_logo" src={Logo} alt="logo" />
        <h4 className="cu_ac_title">Hey, hello👋</h4>
        <p className="cu_ac_text">
          Enter the information you entered while registering.
        </p>
        <div className="cu_google_btn_box text-center">
          <a className="cu_google_btn" href="">
            <NextImage
              className="cu_google_icon"
              src={GoogleIcon}
              alt="googleIcon"
            />{' '}
            Sign in with Google
          </a>
        </div>
        <div className="text-center mt-20 cu_hr_line">
          {' '}
          <p className="cu_or_text">or</p>{' '}
        </div>

        <form className="row">
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="cu_form_label mt-25">
              Email
            </label>
            <input type="email" className="form-control" id="" required />
          </div>
          <div className="col-md-12">
            <label htmlFor="" className="cu_form_label mt-20">
              {' '}
              Password
            </label>
            <input type="Password" className="form-control" id="" required />
          </div>
          <div className="d-flex justify-content-between align-items-center pt-15">
            <div>
              <input type="checkbox" className="pt-15" />
              <label className="pt-15 cu_rem_me_text" htmlFor="">
                Remember me{' '}
              </label>
            </div>
            <a className="cu_forgot_btn" href="">
              Forget password?
            </a>
          </div>

          <div className="col-12">
            <button type="submit" className="w-100 cu_log_in_btn">
              Login
            </button>
          </div>
          <p className="cu_form_msg_text mt-20">
            Don’t have an account?{' '}
            <button
              type="button"
              className="color-red"
              onClick={handleRegisterToggle}
            >
              Sign Up
            </button>{' '}
          </p>
        </form>
      </div>
    </div>
  );
}
