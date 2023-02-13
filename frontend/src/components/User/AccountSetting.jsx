import React from 'react';
import AvatarIcon from '../../assets/img/icon/Avatar-icon.svg';
import { withRouter } from '../../components';
import NextImage from '../Shared/NextImage/NextImage';

function AccountSetting() {
  return (
    <section className="cu_account_settings_wrapper">
      <div className="container">
        <div className="col-lg-6 m-auto pt-40">
          <div className="cu_account_settings_box">
            <h4 className="cu_account_settings_title">Account Settings</h4>
            <p className="cu_account_settings_text">
              Manage your profile, password & more.
            </p>
          </div>
          <div className="cu_account_info_box">
            <div className="cu_avatar_box">
              <NextImage
                className="cu_profile_avatar"
                src={AvatarIcon}
                alt="avatar"
              />
              {/* <NextLink className="cu_upload_avatar_btn" href=""></NextLink> */}
              <label htmlFor="avatar" className="cu_upload_avatar_btn">
                Upload Avater
              </label>
              <input
                style={{ visibility: 'hidden' }}
                type="file"
                name="avatar"
                id="avatar"
              />
            </div>
            <p className="cu_profile_info_title mt-25">Profile Information</p>
            <div className="cu_profile_info_box">
              <form className="row">
                <div className="col-lg-12">
                  <label htmlFor="text" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Monowar H Minar"
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label pt-15">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="mhminar@gmail.com"
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="cu_profile_update_btn">
                    Update
                  </button>
                </div>
              </form>
            </div>

            <p className="cu_account_pass_title mt-25">Password</p>
            <div className="cu_account_pass_box">
              <form className="row">
                <div className="col-lg-12">
                  <label htmlFor="inputEmail4" className="form-label">
                    Current Password
                  </label>
                  <input type="password" className="form-control" id="" />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label pt-15">
                    New Password
                  </label>
                  <input type="password" className="form-control" id="" />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label pt-15">
                    Confirm New Password
                  </label>
                  <input type="password" className="form-control" id="" />
                </div>
                <div className="col-12">
                  <button type="submit" className="cu_pass_update_btn">
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withRouter(AccountSetting);
