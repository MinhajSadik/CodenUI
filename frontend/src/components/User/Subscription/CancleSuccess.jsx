import React from 'react';

export default function CancleSuccess() {
  return (
    <div class="cu_cancel_success_wrapper">
      <div class="cu_cancel_success ">
        <div class="cu_cancel_success_icon_box text-center">
          <img
            class="cu_cancel_success_icon "
            src="./assets/img/icon/tick-mark-icon.svg"
            alt="icon"
          />
        </div>

        <h4 class="cu_cancel_success_title text-center mt-25">
          Your subscription have been cancel
        </h4>

        <div class="cu_go_to_home_btn_box  text-center mt-30">
          <a href="#" class="cu_go_to_home_btn">
            Go to homepage
          </a>
        </div>
      </div>
    </div>
  );
}
