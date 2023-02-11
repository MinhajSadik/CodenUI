import React, { useState } from 'react';
import imagePath from '../../assets/img/imagePath';
import NextImage from '../Shared/Image/NextImage';
import NextLink from '../Shared/Link/NextLink';

export default function NewPassword({ handleOpen }) {
  const [passwordInfo, setPasswordInfo] = useState({
    password: '',
    confirmPassword: '',
  });
  const { password, confirmPassword } = passwordInfo;
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
              type="password"
              className="form-control cu_pass_d_match"
              id=""
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
              type="password"
              className="form-control cu_icon_position"
              id=""
              required
              placeholder="Confirm password"
            />
          </div>

          <div className="col-12">
            <button type="submit" className="w-100 cu_reset_btn">
              Reset Password
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
