import React from 'react';

export default function Otp() {
  return (
    <div class="cu_otp_wrapper">
      <div class="cu_otp ">
        <div class="cu_otp_icon_box text-center">
          <img
            class="cu_otp_icon "
            src="./assets/img/icon/forget_pass_icon.svg"
            alt="icon"
          />
        </div>

        <h4 class="cu_otp_title text-center mt-25">Check your email</h4>
        <p class="cu_otp_text text-center pt-15">
          We sent an OTP in your email account at mhminar83@gmail.com
        </p>

        <div class="cu_otp_box">
          <form class="row mt-25  ">
            <div class="col-lg-3 g-0">
              <input
                type="text"
                class="form-control cu_otp_input cu_active"
                id=""
                required
                placeholder="0"
              />
            </div>

            <div class="col-lg-3 g-0">
              <input
                type="text"
                class="form-control cu_otp_input"
                id=""
                required
                placeholder="0"
              />
            </div>

            <div class="col-lg-3 g-0">
              <input
                type="text"
                class="form-control cu_otp_input"
                id=""
                required
                placeholder="0"
              />
            </div>

            <div class="col-lg-3 g-0">
              <input
                type="text"
                class="form-control cu_otp_input"
                id=""
                required
                placeholder="0"
              />
            </div>

            <div class="text-center">
              <p class="cu_invalid_text">Invaild OTP</p>
            </div>
          </form>
        </div>

        <div class="col-12">
          <button type="submit" class="w-100 cu_verify_btn">
            Verify
          </button>
        </div>
        <p class="cu_otp_form_msg_text text-center mt-20">
          {' '}
          <img src="./assets/img/icon/forget-pass-back-arrow.svg" alt="" />{' '}
          <a class="">Back to Login</a>{' '}
        </p>
      </div>
    </div>
  );
}
