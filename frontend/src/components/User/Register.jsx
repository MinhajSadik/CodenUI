import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/feature/userSlice';
import GoogleIcon from '../../assets/images/icon/logos_google-icon.svg';
import Logo from '../../assets/images/logo/CodenUILogo.svg';
import NextImage from '../Shared/NextImage/NextImage';

const initialState = {
  name: '',
  email: '',
  password: '',
};

export default function Register({ handleSwitch }) {
  const dispatch = useDispatch();
  const [newUserInfo, setNewUserInfo] = useState(initialState);
  const { name, email, password } = newUserInfo;

  function onInputChange(e) {
    const { name, value } = e.target;
    setNewUserInfo({
      ...newUserInfo,
      [name]: value,
    });
  }

  function handleRegister(e) {
    e.preventDefault();
    if (name && email && password) {
      dispatch(registerUser(newUserInfo));
      setNewUserInfo(initialState);
    }
  }
  return (
    <div className="cu_sing_up_wrapper">
      <div className="cu_sign_up" style={{ width: '460px' }}>
        <NextImage className="cu_sign_up_logo" src={Logo} alt="logo" />
        <h4 className="cu_ac_title">Create an account👋</h4>
        <p className="cu_ac_text">
          Create your account and enjoy Coden UI resources
        </p>
        <div className="cu_google_btn_box text-center">
          <a className="cu_google_btn" href="">
            <NextImage
              className="cu_google_icon"
              src={GoogleIcon}
              alt="googleIcon"
            />{' '}
            Sign up with Google
          </a>
        </div>
        <div className="text-center mt-20 cu_hr_line">
          {' '}
          <p className="cu_or_text">or</p>{' '}
        </div>

        <form className="row">
          <div className="col-lg-12">
            <label htmlFor="text" className="cu_form_label mt-25">
              Name*
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onInputChange}
              className="form-control"
              id=""
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="cu_form_label mt-20">
              Email*
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onInputChange}
              className="form-control"
              id=""
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="" className="cu_form_label mt-20">
              {' '}
              Password*
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              className="form-control"
              id=""
              required
            />
          </div>

          <div className="col-lg-12 justify-content-start align-items-center ">
            <input type="checkbox" className="pt-15" />
            <label className="pt-15 cu_condition_text" htmlFor="">
              I agree the{' '}
              <a className="cu_terms_btn" href="">
                Terms
              </a>{' '}
              &
              <a className="cu_privacy_btn" href="">
                Privacy Policy
              </a>{' '}
            </label>
          </div>

          <div className="col-12">
            <button
              type="submit"
              onClick={handleRegister}
              className="w-100 cu_profile_update_btn"
            >
              Sign Up
            </button>
          </div>
          <p className="cu_form_msg_text mt-20">
            Already have an account?{' '}
            <a className="color-red" onClick={handleSwitch}>
              Sign in
            </a>{' '}
          </p>
        </form>
      </div>
    </div>
  );
}
