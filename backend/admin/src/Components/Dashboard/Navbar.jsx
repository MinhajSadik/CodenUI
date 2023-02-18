import React from "react";
import { Link } from "react-router-dom";
import LogoMini from "../../assets/images/logo-mini.svg";
import Logo from "../../assets/images/logo.svg";

export default function Navbar({ loggedIn, user, upperCaseName }) {
  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <Link className="navbar-brand brand-logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <Link className="navbar-brand brand-logo-mini" to="/">
          <img src={LogoMini} alt="logoMini" />
        </Link>
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
            <Link
              className="nav-link count-indicator dropdown-toggle"
              id="notificationDropdown"
              to="/"
              data-bs-toggle="dropdown"
            >
              <i className="mdi mdi-bell-outline"></i>
            </Link>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="notificationDropdown"
            >
              <h6 className="p-3 mb-0">Notifications</h6>
              <div className="dropdown-divider"></div>
              <Link to="/" className="dropdown-item preview-item">
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
                    {" "}
                    Just a reminder that you have an event today{" "}
                  </p>
                </div>
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item preview-item">
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
              </Link>
              <div className="dropdown-divider"></div>
              <Link to="/" className="dropdown-item preview-item">
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
              </Link>
              <div className="dropdown-divider"></div>
              <h6 className="p-3 mb-0 text-center">See all notifications</h6>
            </div>
          </li>
          {loggedIn && (
            <div className="d-flex justify-content-between align-items-center">
              <div className="cu_avatar_wrapper">
                {user.avatar ? (
                  <img className="cu_avatar_icon" src="" alt="avatar" />
                ) : (
                  <div className="cu_avatar_name_word">
                    <span>{upperCaseName(user.name)}</span>
                  </div>
                )}
                <img
                  className="cu_account_drop_down_icon"
                  src=""
                  alt="downArrow"
                />
              </div>
              <div className="account_menu">
                <ul className="cu_account_drop_down_ul">
                  <li>
                    <Link to="/" className="dropdown-item account_menu_item">
                      Logout
                    </Link>
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
