import React from 'react';

export default function ResetPasswordSucess() {
  return (
    <div class="cu_success_pass_wrapper">
      <div class="cu_success_pass ">
        <div class="cu_success_pass_icon_box text-center">
          <img
            class="cu_success_pass_icon "
            src="./assets/img/icon/success.svg"
            alt="icon"
          />
        </div>

        <h4 class="cu_sp_title text-center mt-25">Password reset success</h4>
        <p class="cu_sp_text text-center pt-15">
          Your password has been successfully reset. Click below to login.
        </p>

        <form class="row">
          <div class="col-12">
            <button type="submit" class="w-100 cu_sucess_login_btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
