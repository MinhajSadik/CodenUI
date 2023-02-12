import React from 'react';
import imagePath from '../../assets/img/imagePath';
import NextImage from '../Shared/Image/NextImage';

export default function ResetPasswordSucess({ handleOpen }) {
  return (
    <div classname="cu_success_pass_wrapper">
      <div classname="cu_success_pass ">
        <div classname="cu_success_pass_icon_box text-center">
          <NextImage
            classname="cu_success_pass_icon "
            src={imagePath.SuccessIcon}
            alt="icon"
          />
        </div>

        <h4 classname="cu_sp_title text-center mt-25">
          Password reset success
        </h4>
        <p classname="cu_sp_text text-center pt-15">
          Your password has been successfully reset. Click below to login.
        </p>

        <div classname="row">
          <div classname="col-12">
            <button
              onClick={handleOpen}
              type="submit"
              classname="w-100 cu_sucess_login_btn"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
