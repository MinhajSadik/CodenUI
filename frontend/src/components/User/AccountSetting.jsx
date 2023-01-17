import React from 'react';

export default function AccountSetting() {
  return (
    <section>
      <div class="cu_account_settings_wrapper">
        <div class="container">
          <div class="col-lg-6 m-auto pt-40">
            <div class="cu_account_settings_box">
              <h4 class="cu_account_settings_title">Account Settings</h4>
              <p class="cu_account_settings_text">
                Manage your profile, password & more.
              </p>
            </div>
            <div class="cu_account_info_box">
              <div class="cu_avatar_box">
                <img
                  class="cu_profile_avatar"
                  src="./assets/img/icon/Avatar-icon.svg"
                  alt=""
                />
                <a class="cu_upload_avatar_btn" href="">
                  Upload Avater
                </a>
              </div>
              <p class="cu_profile_info_title mt-25">Profile Information</p>
              <div class="cu_profile_info_box">
                <form class="row">
                  <div class="col-lg-12">
                    <label htmlFor="text" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id=""
                      placeholder="Monowar H Minar"
                    />
                  </div>
                  <div class="col-md-12">
                    <label htmlFor="inputEmail4" class="form-label pt-15">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="mhminar@gmail.com"
                    />
                  </div>
                  <div class="col-12">
                    <button type="submit" class="cu_profile_update_btn">
                      Update
                    </button>
                  </div>
                </form>
              </div>

              <p class="cu_account_pass_title mt-25">Password</p>
              <div class="cu_account_pass_box">
                <form class="row">
                  <div class="col-lg-12">
                    <label htmlFor="inputEmail4" class="form-label">
                      Current Password
                    </label>
                    <input type="password" class="form-control" id="" />
                  </div>
                  <div class="col-md-12">
                    <label htmlFor="inputEmail4" class="form-label pt-15">
                      New Password
                    </label>
                    <input type="password" class="form-control" id="" />
                  </div>
                  <div class="col-md-12">
                    <label htmlFor="inputEmail4" class="form-label pt-15">
                      Confirm New Password
                    </label>
                    <input type="password" class="form-control" id="" />
                  </div>
                  <div class="col-12">
                    <button type="submit" class="cu_pass_update_btn">
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
