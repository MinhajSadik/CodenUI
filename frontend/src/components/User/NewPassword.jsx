import React from 'react';

export default function NewPassword() {
  return (
    <div class="cu_new_pass_wrapper">
      <div class="cu_new_pass ">
        <div class="cu_new_pass_icon_box text-center">
          <img
            class="cu_new_pass_icon "
            src="./assets/img/icon/forget_pass_icon.svg"
            alt="icon"
          />
        </div>
        <h4 class="cu_np_title text-center mt-25">Set new password</h4>
        <p class="cu_np_text text-center pt-15">
          Your new password must be different to previoulsy used passwords
        </p>
        <form class="row">
          <div class="col-md-12 cu_icon_position">
            <img
              class="cu_input_icon_eye"
              src="./assets/img/icon/eye.svg"
              alt=""
            />
            <label htmlFor="inputEmail4" class="cu_form_label mt-25 pb-10">
              Password*
            </label>
            <input
              type="password"
              class="form-control cu_pass_d_match"
              id=""
              required
              placeholder="Password didn’t match"
            />
            <p class="cu_pass_length_text">Password must be 8 characters</p>

            <img
              class="cu_input_icon_eye_off"
              src="./assets/img/icon/eye-off.svg"
              alt=""
            />
            <label htmlFor="inputEmail4" class="cu_form_label pt-15 pb-10">
              Confirm Password*
            </label>
            <input
              type="password"
              class="form-control cu_icon_position"
              id=""
              required
            />
          </div>

          <div class="col-12">
            <button type="submit" class="w-100 cu_reset_btn">
              Reset Password
            </button>
          </div>
          <p class="cu_np_form_msg_text text-center mt-20">
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
