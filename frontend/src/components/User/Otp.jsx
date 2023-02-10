import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import imagePath from '../../assets/img/imagePath';
import NextImage from '../Shared/Image/NextImage';

export default function Otp() {
  const { email } = useSelector((state) => state.user.otp);
  const [otp, setOtp] = useState({
    otp: 0,
  });

  function onInputChange(e) {
    const { name, value } = e.target;
    setOtp({
      ...otp,
      [name]: value,
    });
  }

  function handleVerify(e) {
    console.log('verify', otp);
  }

  return (
    <div className="cu_otp_wrapper">
      <div className="cu_otp">
        <div className="cu_otp_icon_box text-center">
          <NextImage
            className="cu_otp_icon "
            src={imagePath.ForgotPassIcon}
            alt="icon"
          />
        </div>

        <h4 className="cu_otp_title text-center mt-25">Check your email</h4>
        <p className="cu_otp_text text-center pt-15">
          We sent an OTP in your email account at {email}
        </p>

        <div className="cu_otp_box">
          <form className="row mt-25  ">
            <div className="col-lg-3 g-0">
              <input
                type="text"
                className="form-control cu_otp_input cu_active"
                id="otp"
                name="otp"
                required
                placeholder="0"
                onChange={onInputChange}
              />
            </div>

            <div className="col-lg-3 g-0">
              <input
                type="text"
                className="form-control cu_otp_input"
                id="otp"
                name="otp"
                required
                placeholder="0"
                onChange={onInputChange}
              />
            </div>

            <div className="col-lg-3 g-0">
              <input
                type="text"
                className="form-control cu_otp_input"
                id="otp"
                name="otp"
                required
                placeholder="0"
                onChange={onInputChange}
              />
            </div>

            <div className="col-lg-3 g-0">
              <input
                type="text"
                className="form-control cu_otp_input"
                id="otp"
                name="otp"
                required
                placeholder="0"
                onChange={onInputChange}
              />
            </div>

            <div className="text-center">
              <p className="cu_invalid_text">Invaild OTP</p>
            </div>
          </form>
        </div>

        <div className="col-12">
          <button
            onClick={handleVerify}
            type="submit"
            className="w-100 cu_verify_btn"
          >
            Verify
          </button>
        </div>
        <p className="cu_otp_form_msg_text text-center mt-20">
          {' '}
          <NextImage src={imagePath.ForgotPassBackArrow} alt="" />{' '}
          <a className="">Back to Login</a>{' '}
        </p>
      </div>
    </div>
  );
}
