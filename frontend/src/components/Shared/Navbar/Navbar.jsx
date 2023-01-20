import { useRouter } from 'next/router';
import AvatarIcon from '../../../assets/img/icon/Avatar-icon.svg';
import DownArrow from '../../../assets/img/icon/downArrow.svg';
import Logo from '../../../assets/img/logo/CodenUILogo.svg';
import NextImage from '../Image/NextImage';
import NextLink from '../Link/NextLink';

export default function Navbar({ handleLoginToggle }) {
  const { pathname } = useRouter();
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NextLink href="/" className="navbar-brand">
            <NextImage src={Logo} alt="logo" />
          </NextLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NextLink
                  className="nav-link"
                  aria-current="page"
                  href="coded-templates"
                >
                  Coded Templates
                </NextLink>
              </li>

              <li className="nav-item">
                <NextLink
                  className="nav-link"
                  aria-current="page"
                  href="coded-blocks"
                >
                  Coded Blocks
                </NextLink>
              </li>

              <li className="nav-item">
                <NextLink
                  className="nav-link"
                  aria-current="page"
                  href="email-templates"
                >
                  Email Templates
                </NextLink>
              </li>

              <li className="nav-item dropdown">
                <NextLink
                  className="nav-link"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Icon
                  <NextImage
                    className="cu_drop_down_arrow"
                    src={DownArrow}
                    alt="down-arrow"
                  />
                </NextLink>
                <div className="dropdown_icon">
                  <ul className="cu_drop_down_ul">
                    <li>
                      <NextLink className="dropdown-item" href="icon-pack">
                        Pack
                      </NextLink>
                    </li>
                    <li>
                      <NextLink
                        className="dropdown-item mt-6"
                        href="single-icon"
                      >
                        Single
                      </NextLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            {pathname === '/account-setting' ? (
              <div className="d-flex justify-content-between align-items-center">
                <NextLink href="/pricing" className="cu_Pricing">
                  Pricing
                </NextLink>
                <div>
                  <NextImage
                    className="cu_avatar_icon"
                    src={AvatarIcon}
                    alt="avataricon"
                  />
                  <NextImage
                    className="cu_account_drop_down_icon"
                    src={DownArrow}
                    alt="downArrow"
                  />

                  <div className="account_menu">
                    <ul className="cu_account_drop_down_ul">
                      <li>
                        <NextLink
                          href="setting"
                          className="dropdown-item account_menu_item"
                        >
                          Settings
                        </NextLink>
                      </li>
                      <li>
                        <NextLink
                          href="/billing"
                          className="dropdown-item account_menu_item mt-6"
                        >
                          Billing
                        </NextLink>
                      </li>
                      <li>
                        <NextLink
                          href=""
                          className="dropdown-item account_menu_item mt-6"
                        >
                          Logout
                        </NextLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="d-flex">
                <button
                  type="button"
                  className="cu_sign_in_btn"
                  onClick={handleLoginToggle}
                >
                  Sign In
                </button>
                <NextLink href="all-access" className="cu_get_access_btn">
                  Get All Access
                </NextLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
