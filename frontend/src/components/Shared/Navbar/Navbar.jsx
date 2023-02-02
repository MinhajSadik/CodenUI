import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../../redux/feature/userSlice';
import imagePath from '../../../assets/img/imagePath';
import NextImage from '../Image/NextImage';
import NextLink from '../Link/NextLink';

export default function Navbar({ handleOpen, loggedIn, router }) {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
    router.push('/');
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NextLink href="/" className="navbar-brand">
            <NextImage src={imagePath.Logo} alt="logo" />
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
                  href="/coded-templates"
                >
                  Coded Templates
                </NextLink>
              </li>

              <li className="nav-item">
                <NextLink
                  className="nav-link"
                  aria-current="page"
                  href="/coded-blocks"
                >
                  Coded Blocks
                </NextLink>
              </li>

              <li className="nav-item">
                <NextLink
                  className="nav-link"
                  aria-current="page"
                  href="/email-templates"
                >
                  Email Templates
                </NextLink>
              </li>

              <li className="nav-item dropdown">
                <NextLink
                  className="nav-link"
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Icon
                  <NextImage
                    className="cu_drop_down_arrow"
                    src={imagePath.DownArrow}
                    alt="down-arrow"
                  />
                </NextLink>
                <div className="dropdown_icon">
                  <ul className="cu_drop_down_ul">
                    <li>
                      <NextLink className="dropdown-item" href="/icon-pack">
                        Pack
                      </NextLink>
                    </li>
                    <li>
                      <NextLink
                        className="dropdown-item mt-6"
                        href="/single-icons"
                      >
                        Single
                      </NextLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            {loggedIn ? (
              <div className="d-flex justify-content-between align-items-center">
                <NextLink href="/pricing" className="cu_Pricing">
                  Pricing
                </NextLink>
                <div className="cu_avatar_wrapper">
                  <NextImage
                    className="cu_avatar_icon"
                    src={imagePath.Avatar}
                    alt="avataricon"
                  />
                  <NextImage
                    className="cu_account_drop_down_icon"
                    src={imagePath.DownArrow}
                    alt="downArrow"
                  />
                </div>
                <div className="account_menu">
                  <ul className="cu_account_drop_down_ul">
                    <li>
                      <NextLink
                        href="account-setting"
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
                    <li onClick={handleLogout}>
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
            ) : (
              <div className="d-flex">
                <button
                  type="button"
                  className="cu_sign_in_btn"
                  onClick={handleOpen}
                >
                  Sign In
                </button>
                <NextLink href="/pricing" className="cu_get_access_btn">
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
