import React from 'react';
import imagePath from '../../assets/images/imagePath';
import NextImage from '../Shared/NextImage/NextImage';

export default function ResetPasswordSucess({ handleOpen }) {
  return (
    <div className="cu_success_pass_wrapper">
      <div className="cu_success_pass">
        <div className="cu_success_pass_icon_box text-center">
          <NextImage
            className="cu_success_pass_icon "
            src={imagePath.SuccessIcon}
            alt="icon"
          />
        </div>

        <h4 className="cu_sp_title text-center mt-25">
          Password reset success
        </h4>
        <p className="cu_sp_text text-center pt-15">
          Your password has been successfully reset. Click below to login.
        </p>

        <div className="row">
          <div className="col-12">
            <button
              onClick={handleOpen}
              type="submit"
              className="w-100 cu_sucess_login_btn"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
