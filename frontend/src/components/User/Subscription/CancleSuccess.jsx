import React from 'react';

export default function CancleSuccess() {
  return (
    <div className="cu_cancel_success_wrapper">
      <div className="cu_cancel_success ">
        <div className="cu_cancel_success_icon_box text-center">
          <img
            className="cu_cancel_success_icon "
            src="./assets/img/icon/tick-mark-icon.svg"
            alt="icon"
          />
        </div>

        <h4 className="cu_cancel_success_title text-center mt-25">
          Your subscription have been cancel
        </h4>

        <div className="cu_go_to_home_btn_box  text-center mt-30">
          <a href="#" className="cu_go_to_home_btn">
            Go to homepage
          </a>
        </div>
      </div>
    </div>
  );
}
