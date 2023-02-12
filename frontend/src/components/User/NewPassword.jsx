import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNewPassword } from '../../../redux/feature/userSlice';
import imagePath from '../../assets/img/imagePath';
import NextImage from '../Shared/Image/NextImage';
import NextLink from '../Shared/Link/NextLink';

export default function NewPassword({ handleOpen, handleCloseNewPassword }) {
  const dispatch = useDispatch();
  const { loading, email } = useSelector((state) => ({
    ...state.user,
    ...state.user.otp,
  }));

  console.log(email);
  const [passwordInfo, setPasswordInfo] = useState({
    password: '',
    confirmPassword: '',
  });

  const { password, confirmPassword } = passwordInfo;

  function onInputChange(e) {
    const { name, value } = e.target;
    setPasswordInfo({
      ...passwordInfo,
      [name]: value,
    });
  }

  function handleNewPassword(e) {
    e.preventDefault();
    if (password && confirmPassword) {
      dispatch(setNewPassword({ email, password, confirmPassword }));
      handleCloseNewPassword();
    }
  }
  return (
    <div className="cu_new_pass_wrapper">
      <div className="cu_new_pass">
        <div className="cu_new_pass_icon_box text-center">
          <NextImage
            className="cu_new_pass_icon "
            src={imagePath.ForgotPassIcon}
            alt="icon"
          />
        </div>
        <h4 className="cu_np_title text-center mt-25">Set new password</h4>
        <p className="cu_np_text text-center pt-15">
          Your new password must be different to previoulsy used passwords
        </p>
        <form className="row">
          <div className="col-md-12 cu_icon_position">
            <NextImage
              className="cu_input_icon_eye"
              src={imagePath.EyeIcon}
              alt=""
            />
            <label htmlFor="inputEmail4" className="cu_form_label mt-25 pb-10">
              Password*
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              className="form-control cu_pass_d_match"
              required
              placeholder="Password "
            />
            {password && (
              <p className="cu_pass_length_text">
                Password must be 8 characters
              </p>
            )}

            <NextImage
              className="cu_input_icon_eye_off"
              src={imagePath.EyeOffIcon}
              alt=""
            />
            <label htmlFor="inputEmail4" className="cu_form_label pt-15 pb-10">
              Confirm Password*
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onInputChange}
              className="form-control cu_icon_position"
              required
              placeholder="Confirm password"
            />
          </div>

          <div className="col-12">
            <button
              onClick={handleNewPassword}
              type="submit"
              className="w-100 cu_reset_btn"
            >
              {loading ? 'Reseting Password...' : 'Reset Password'}
            </button>
          </div>
          <p className="cu_np_form_msg_text text-center mt-20">
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
