import React from 'react';

export default function CancleSubscription() {
  return (
    <div className="cu_cancel_subs_wrapper">
      <div className="cu_cancel_subs ">
        <div className="cu_cancel_subs_icon_box text-center">
          <img
            className="cu_cancel_subs_icon "
            src="./assets/img/icon/sad-icon.svg"
            alt="icon"
          />
        </div>

        <h4 className="cu_cancel_subs_title text-center mt-25">
          Are you sure want to cancel your subscription?
        </h4>
        <p className="cu_cancel_subs_text text-center pt-15">
          Don't worry. You can access all resources until the plan will expire.
        </p>

        <div className="cu_cancel_subs_btn_box  text-center mt-30">
          <a href="#" className=" cu_cancel_subs_yes_btn">
            Yeah sure
          </a>
          <a href="#" className=" cu_cancel_subs_no_btn">
            No Thanks
          </a>
        </div>
      </div>
    </div>
  );
}
