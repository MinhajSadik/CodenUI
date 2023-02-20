import React from 'react';
import { useSelector } from 'react-redux';
import imagesPath from '../../../assets/images/imagesPath';
import { upperCaseName } from '../../../utils/upperCaseName';
import NextImage from '../../Shared/NextImage/NextImage';
import NextLink from '../../Shared/NextLink/NextLink';

export default function Navbar() {
  const { user, loggedIn } = useSelector((state) => state.user);
  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <NextLink className="navbar-brand brand-logo" href="/codenui/board">
          <NextImage src={imagesPath.Logo} alt="logo" />
        </NextLink>
        <NextLink className="navbar-brand brand-logo-mini" href="index.html">
          <NextImage src={imagesPath.MiniLogo} alt="logo" />
        </NextLink>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span className="mdi mdi-menu"></span>
        </button>
        <div className="search-field d-none d-md-block">
          <form className="d-flex align-items-center h-100" action="#">
            <div className="input-group">
              <div className="input-group-prepend bg-transparent">
                <i className="input-group-text border-0 mdi mdi-magnify"></i>
              </div>
              <input
                type="text"
                className="form-control bg-transparent border-0"
                placeholder="Search projects"
              />
            </div>
          </form>
        </div>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item dropdown">
            <NextLink
              className="nav-link count-indicator dropdown-toggle"
              id="notificationDropdown"
              href=""
              data-bs-toggle="dropdown"
            >
              <i className="mdi mdi-bell-outline"></i>
            </NextLink>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="notificationDropdown"
            >
              <h6 className="p-3 mb-0">Notifications</h6>
              <div className="dropdown-divider"></div>
              <NextLink href="" className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-success">
                    <i className="mdi mdi-calendar"></i>
                  </div>
                </div>
                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                  <h6 className="preview-subject font-weight-normal mb-1">
                    Event today
                  </h6>
                  <p className="text-gray ellipsis mb-0">
                    {' '}
                    Just a reminder that you have an event today{' '}
                  </p>
                </div>
              </NextLink>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-warning">
                    <i className="mdi mdi-settings"></i>
                  </div>
                </div>
                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                  <h6 className="preview-subject font-weight-normal mb-1">
                    Settings
                  </h6>
                  <p className="text-gray ellipsis mb-0"> Update dashboard </p>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <NextLink href="" className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-info">
                    <i className="mdi mdi-link-variant"></i>
                  </div>
                </div>
                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                  <h6 className="preview-subject font-weight-normal mb-1">
                    Launch Admin
                  </h6>
                  <p className="text-gray ellipsis mb-0"> New admin wow! </p>
                </div>
              </NextLink>
              <div className="dropdown-divider"></div>
              <h6 className="p-3 mb-0 text-center">See all notifications</h6>
            </div>
          </li>
          {loggedIn && (
            <div className="d-flex justify-content-between align-items-center">
              <div className="cu_avatar_wrapper">
                {user.avatar ? (
                  <NextImage
                    className="cu_avatar_icon"
                    src={imagesPath.Avatar}
                    alt="avatar"
                  />
                ) : (
                  <div className="cu_avatar_name_word">
                    <span>{upperCaseName(user.name)}</span>
                  </div>
                )}
                <NextImage
                  className="cu_account_drop_down_icon"
                  src={imagesPath.DownArrow}
                  alt="downArrow"
                />
              </div>
              <div className="account_menu">
                <ul className="cu_account_drop_down_ul">
                  <li>
                    <NextLink
                      href=""
                      className="dropdown-item account_menu_item"
                    >
                      Logout
                    </NextLink>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  );
}
