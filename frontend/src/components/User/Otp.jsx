import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOtp } from '../../../redux/feature/userSlice';
import imagePath from '../../assets/images/imagesPath';
import NextImage from '../Shared/NextImage/NextImage';
import NextLink from '../Shared/NextLink/NextLink';

const initialState = {
  otp1: '',
  otp2: '',
  otp3: '',
  otp4: '',
};

export default function Otp({ handleOpen, handleCloseOtp }) {
  const dispatch = useDispatch();
  const [otpInfo, setOtpInfo] = useState(initialState);
  const { loading, email, hash } = useSelector((state) => ({
    ...state.user,
    ...state.user.otp,
  }));
  const { otp1, otp2, otp3, otp4 } = otpInfo;

  function onInputChange(e) {
    const { name, value } = e.target;
    setOtpInfo({
      ...otpInfo,
      [name]: value,
    });
  }

  function autoFocus(e) {
    if (e.key === 'Delete' || e.key === 'Backspace') {
      const next = e.target.tabIndex - 2;
      if (next > -1) {
        e.target.form.elements[next].focus();
      }
    } else {
      const next = e.target.tabIndex;
      if (next < 4) {
        e.target.form.elements[next].focus();
      }
    }
  }

  function handleVerify(e) {
    const otp = Object.values(otpInfo).join('');
    if (otp1 && otp2 && otp3 && otp4) {
      dispatch(verifyOtp({ otp, hash, email }));
      handleCloseOtp();
      setOtpInfo(initialState);
    }
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
                id="otp1"
                name="otp1"
                value={otp1}
                tabIndex="1"
                required
                placeholder="0"
                onChange={onInputChange}
                onKeyUp={autoFocus}
              />
            </div>

            <div className="col-lg-3 g-0">
              <input
                type="text"
                className="form-control cu_otp_input"
                id="otp2"
                name="otp2"
                value={otp2}
                tabIndex="2"
                required
                placeholder="0"
                onChange={onInputChange}
                onKeyUp={autoFocus}
              />
            </div>

            <div className="col-lg-3 g-0">
              <input
                type="text"
                className="form-control cu_otp_input"
                id="otp3"
                name="otp3"
                value={otp3}
                tabIndex="3"
                required
                placeholder="0"
                onChange={onInputChange}
                onKeyUp={autoFocus}
              />
            </div>

            <div className="col-lg-3 g-0">
              <input
                type="text"
                className="form-control cu_otp_input"
                id="otp4"
                name="otp4"
                value={otp4}
                tabIndex="4"
                required
                placeholder="0"
                onChange={onInputChange}
                onKeyUp={autoFocus}
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
            {loading ? 'Verifing...' : 'Verify'}
          </button>
        </div>
        <p className="cu_otp_form_msg_text text-center mt-20">
          {' '}
          <NextImage src={imagePath.ForgotPassBackArrow} alt="" />{' '}
          <NextLink href="" className="" onClick={handleOpen}>
            Back to Login
          </NextLink>{' '}
        </p>
      </div>
    </div>
  );
}
