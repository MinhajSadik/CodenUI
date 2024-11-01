import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../../redux/feature/userSlice';
import imagePath from '../../assets/images/imagesPath';
import NextImage from '../Shared/NextImage/NextImage';
import NextLink from '../Shared/NextLink/NextLink';

export default function ForgotPassword({ handleOpen, handleCloseForgot }) {
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [forgotInfo, setForgotInfo] = useState({
    email: '',
  });

  function onInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setForgotInfo({
      ...forgotInfo,
      [name]: value,
    });
  }

  function handleForgot(e) {
    e.preventDefault();
    if (forgotInfo.email) {
      dispatch(forgotPassword(forgotInfo));
      handleCloseForgot();
      setForgotInfo({
        email: '',
      });
    }
  }

  return (
    <div className="cu_forget_pass_wrapper">
      <div className="cu_forget_pass">
        <div className="cu_forget_pass_icon_box text-center">
          <NextImage
            className="cu_forget_pass_icon "
            src={imagePath.ForgotPassIcon}
            alt="icon"
          />
        </div>

        <h4 className="cu_fp_title text-center mt-25">Forgot Password?</h4>
        <p className="cu_fp_text text-center pt-15">
          We will send an OTP in your email account
        </p>

        <form className="row">
          <div className="col-md-12">
            <label htmlFor="inputEmail4" className="cu_form_label mt-25 pb-10">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={forgotInfo.email}
              onChange={onInputChange}
              className="form-control"
              id=""
              required
            />
          </div>
          <div className="col-12">
            <button
              onClick={handleForgot}
              type="submit"
              className="w-100 cu_otp_btn"
              required
            >
              {loading ? 'Sending OTP...' : 'Send OTP'}
            </button>
          </div>
          <p className="cu_fp_form_msg_text text-center mt-20">
            {' '}
            <NextImage src={imagePath.ForgotPassBackArrow} alt="" />{' '}
            <NextLink href="" className="" onClick={handleOpen}>
              Back to Login
            </NextLink>{' '}
          </p>
        </form>
      </div>
    </div>
  );
}
