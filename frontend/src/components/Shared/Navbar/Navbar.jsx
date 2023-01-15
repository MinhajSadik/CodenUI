import DownArrow from '../../../assets/img/icon/downArrow.svg';
import Logo from '../../../assets/img/logo/CodenUILogo.svg';
import NextImage from '../Image/NextImage';
import NextLink from '../Link/NextLink';

export default function Navbar() {
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
                  href="coded_templates"
                >
                  Coded Templates
                </NextLink>
              </li>

              <li className="nav-item">
                <NextLink
                  className="nav-link"
                  aria-current="page"
                  href="coded_blocks"
                >
                  Coded Blocks
                </NextLink>
              </li>

              <li className="nav-item">
                <NextLink
                  className="nav-link"
                  aria-current="page"
                  href="email_templates"
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
                    src={DownArrow}
                    alt="down-arrow"
                  />
                </NextLink>
                <div className="dropdown-menu">
                  <ul className="cu_drop_down_ul">
                    <li>
                      <NextLink className="dropdown-item" href="icon_pack">
                        Pack
                      </NextLink>
                    </li>
                    <li>
                      <NextLink
                        className="dropdown-item mt-6"
                        href="single_icon"
                      >
                        Single
                      </NextLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <NextLink href="/login" className="cu_sign_in_btn">
                Sign In
              </NextLink>
              <NextLink href="all_access" className="cu_get_access_btn">
                Get All Access
              </NextLink>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
