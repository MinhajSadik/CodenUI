import React from 'react';

export default function ForgetPassword() {
  return (
    <div class="cu_forget_pass_wrapper">
      <div class="cu_forget_pass ">
        <div class="cu_forget_pass_icon_box text-center">
          <img
            class="cu_forget_pass_icon "
            src="./assets/img/icon/forget_pass_icon.svg"
            alt="icon"
          />
        </div>

        <h4 class="cu_fp_title text-center mt-25">Forgot Password?</h4>
        <p class="cu_fp_text text-center pt-15">
          We will send an OTP in your email account
        </p>

        <form class="row">
          <div class="col-md-12">
            <label htmlFor="inputEmail4" class="cu_form_label mt-25 pb-10">
              Email
            </label>
            <input type="email" class="form-control" id="" required />
          </div>

          <div class="col-12">
            <button type="submit" class="w-100 cu_otp_btn">
              Send OTP
            </button>
          </div>
          <p class="cu_fp_form_msg_text text-center mt-20">
            {' '}
            <img
              src="./assets/img/icon/forget-pass-back-arrow.svg"
              alt=""
            />{' '}
            <a class="">Back to Login</a>{' '}
          </p>
        </form>
      </div>
    </div>
  );
}
