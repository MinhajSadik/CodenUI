import Image from 'next/image';
import DownArrow from '../../assets/img/icon/downArrow.svg';
import Logo from '../../assets/img/logo/CodenUILogo.svg';
import * as classes from './Navbar.module.css';

export default function Navbar() {
  return (
    <header>
      <nav className={`${classes.navbar} navbar-expand-lg`}>
        <div className="container">
          <a className={classes.navbar_brand} href="#">
            <Image src={Logo} alt="Logo" />
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
            <ul className={`${classes.navbar_nav} me-auto mb-2 mb-lg-0`}>
              <li className={classes.nav_item}>
                <a
                  className={classes.nav_link}
                  aria-current="page"
                  href="./categories_page.html"
                >
                  Coded Templates
                </a>
              </li>

              <li className={classes.nav_item}>
                <a
                  className={classes.nav_link}
                  aria-current="page"
                  href="./coded-blocks.html"
                >
                  Coded Blocks
                </a>
              </li>

              <li className={classes.nav_item}>
                <a className={classes.nav_link} aria-current="page" href="#">
                  Email Templates
                </a>
              </li>

              <li className={`${classes.nav_item} dropdown`}>
                <a
                  className={classes.nav_link}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Icon
                  <Image
                    className={classes.cu_drop_down_arrow}
                    src={DownArrow}
                    alt="down-arrow"
                  />
                </a>
                <div className={classes.dropdown_menu}>
                  <ul className={classes.cu_drop_down_ul}>
                    <li>
                      <a className="dropdown-item" href="./icon-pack.html">
                        Pack
                      </a>
                    </li>
                    <li>
                      <a
                        className={`${classes.dropdown_item} mt-6`}
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
              <a href="#" className={classes.cu_sign_in_btn}>
                Sign In
              </a>
              <a href="#" className={classes.cu_get_access_btn}>
                Get All Access
              </a>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
