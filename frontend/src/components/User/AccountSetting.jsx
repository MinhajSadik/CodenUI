import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePassword, updateUser } from '../../../redux/feature/userSlice';
import imagesPath from '../../assets/images/imagesPath';
import { withRouter } from '../../components';
import { upperCaseName } from '../../utils/upperCaseName';
import NextImage from '../Shared/NextImage/NextImage';

const userUpdateInitState = {
  name: '',
  email: '',
  avatar: '',
};

const passwordInitState = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
};

function AccountSetting({ email, id }) {
  const [userUpdateInfo, setUserUpdateInfo] = useState(userUpdateInitState);

  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.user);
  const [passwordInfo, setPasswordInfo] = useState(passwordInitState);
  const { currentPassword, newPassword, confirmPassword } = passwordInfo;

  function captureUserInfo(e) {
    const { name, value } = e.target;
    setUserUpdateInfo({
      ...userUpdateInfo,
      [name]: value,
    });
  }

  function capturePassword(e) {
    const { name, value } = e.target;
    setPasswordInfo({
      ...passwordInfo,
      [name]: value,
    });
  }

  function captureImage(e) {
    const file = e.target.files[0];
    const reder = new FileReader();
    reder.readAsDataURL(file);
    reder.onloadend = () => {
      setUserUpdateInfo({
        ...userUpdateInfo,
        avatar: reder.result,
      });
    };
  }

  function handleUpdateUser(e) {
    // e.preventDefault();
    const { name, email, avatar } = userUpdateInfo;
    if (name || email || avatar) {
      dispatch(updateUser({ id, userUpdateInfo }));
    }
    setUserUpdateInfo(userUpdateInitState);
  }

  function handleUpdatePassword(e) {
    e.preventDefault();
    if (currentPassword && newPassword && confirmPassword) {
      dispatch(
        updatePassword({ email, currentPassword, newPassword, confirmPassword })
      );
    }
    setPasswordInfo(passwordInitState);
  }

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
              {user.avatar ? (
                <NextImage
                  className="cu_profile_avatar"
                  src={imagesPath.Avatar}
                  alt="avatar"
                />
              ) : (
                <div className="cu_profile_name_word">
                  <span>{upperCaseName(user?.name)}</span>
                  <img
                    className="cu_profile_avatar"
                    src={userUpdateInfo.avatar}
                    alt="avatar"
                  />
                </div>
              )}

              <label htmlFor="avatar" className="cu_upload_avatar_btn">
                Upload Avater
              </label>
              <input
                style={{ visibility: 'hidden' }}
                type="file"
                onChange={captureImage}
                name="avatar"
                id="avatar"
              />
            </div>
            <p className="cu_profile_info_title mt-25">Profile Information</p>
            <div className="cu_profile_info_box">
              <div className="row">
                <div className="col-lg-12">
                  <label htmlFor="text" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={captureUserInfo}
                    placeholder={user?.name}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label pt-15">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={captureUserInfo}
                    placeholder={user?.email}
                  />
                </div>
                <div className="col-12">
                  <button
                    onClick={handleUpdateUser}
                    type="submit"
                    className="cu_profile_update_btn"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>

            <p className="cu_account_pass_title mt-25">Password</p>
            <div className="cu_account_pass_box">
              <form className="row">
                <div className="col-lg-12">
                  <label htmlFor="inputEmail4" className="form-label">
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    className="form-control"
                    onChange={capturePassword}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label pt-15">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    onChange={capturePassword}
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label pt-15">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={capturePassword}
                    className="form-control"
                  />
                </div>
                <div className="col-12">
                  <button
                    onClick={handleUpdatePassword}
                    type="submit"
                    className="cu_pass_update_btn"
                  >
                    {loading ? 'Updating...' : 'Update Password'}
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
