import React from 'react';

export default function CancleSubscription() {
  return (
    <div class="cu_cancel_subs_wrapper">
      <div class="cu_cancel_subs ">
        <div class="cu_cancel_subs_icon_box text-center">
          <img
            class="cu_cancel_subs_icon "
            src="./assets/img/icon/sad-icon.svg"
            alt="icon"
          />
        </div>

        <h4 class="cu_cancel_subs_title text-center mt-25">
          Are you sure want to cancel your subscription?
        </h4>
        <p class="cu_cancel_subs_text text-center pt-15">
          Don't worry. You can access all resources until the plan will expire.
        </p>

        <div class="cu_cancel_subs_btn_box  text-center mt-30">
          <a href="#" class=" cu_cancel_subs_yes_btn">
            Yeah sure
          </a>
          <a href="#" class=" cu_cancel_subs_no_btn">
            No Thanks
          </a>
        </div>
      </div>
    </div>
  );
}
