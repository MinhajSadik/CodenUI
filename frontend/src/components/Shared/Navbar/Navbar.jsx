import DownArrow from '../../../assets/img/icon/downArrow.svg';
import Logo from '../../../assets/img/logo/CodenUILogo.svg';
import NextImage from '../Image/Image';

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <NextImage src={Logo} alt="" />
          </a>
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
                <a
                  className="nav-link"
                  aria-current="page"
                  href="coded_template"
                >
                  Coded Templates
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="./coded-blocks.html"
                >
                  Coded Blocks
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Email Templates
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
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
                </a>
                <div className="dropdown-menu">
                  <ul className="cu_drop_down_ul">
                    <li>
                      <a className="dropdown-item" href="./icon-pack.html">
                        Pack
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item mt-6"
                        href="./single-icon.html"
                      >
                        Single
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <a href="#" className="cu_sign_in_btn">
                Sign In
              </a>
              <a href="#" className="cu_get_access_btn">
                Get All Access
              </a>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
