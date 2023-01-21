import React from 'react';
import imagePath from '../../../assets/img/imagePath';
import NextImage from '../Image/NextImage';

export default function Footer() {
  return (
    <footer>
      <div className="cu_footer_wrapper pt-50">
        <div className="container">
          <div className="row pb-65 sm-pb-0">
            <div className="col-lg-4 order-1 order-lg-1">
              <div className="cu_footer_info">
                <NextImage
                  className="cu_footer_logo"
                  src={imagePath.Logo}
                  alt="cu_footer_logo"
                />
                <p className="cu_footer_text">
                  Coden UI is a design and code-based platform that helps people
                  grow their businesses with tons of ready-made templates.
                </p>
                <div className="cu_footer_social_link d-flex">
                  <p className="cu_footer_social_link_title">Follow us:</p>
                  <div className="cu_footer_social_link_icon_box">
                    <ul className="cu_footer_social_items d-flex">
                      <li className="cu_footer_social_item">
                        <a href="#">
                          <NextImage src={imagePath.Facebook} alt="facebook" />
                        </a>
                      </li>
                      <li className="cu_footer_social_item">
                        <a href="#">
                          <NextImage src={imagePath.LinkedIn} alt="linkedin" />
                        </a>
                      </li>
                      <li className="cu_footer_social_item">
                        <a href="#">
                          <NextImage
                            src={imagePath.Twitter}
                            alt="twitter.svg"
                          />
                        </a>
                      </li>
                      <li className="cu_footer_social_item">
                        <a href="#">
                          <NextImage
                            src={imagePath.Instagram}
                            alt="instagram.svg"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 offset-lg-1 order-3 order-lg-2">
              <div className="cu_footer_list">
                <h5 className="cu_list_title">Categories</h5>
                <ul className="cu_footer_list_items">
                  <li className="cu_footer_list_item">
                    <a className="cu_footer_list_item_link" href="#">
                      Coded Templates
                    </a>
                  </li>
                  <li className="cu_footer_list_item">
                    <a className="cu_footer_list_item_link" href="#">
                      Coded Blocks
                    </a>
                  </li>
                  <li className="cu_footer_list_item">
                    <a className="cu_footer_list_item_link" href="#">
                      Icon
                    </a>
                  </li>
                  <li className="cu_footer_list_item">
                    <a className="cu_footer_list_item_link" href="#">
                      Email Templates
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 order-4 order-lg-3">
              <div className="cu_footer_list">
                <h5 className="cu_list_title">Company</h5>
                <ul className="cu_footer_list_items">
                  <li className="cu_footer_list_item">
                    <a className="cu_footer_list_item_link" href="#">
                      Licenses
                    </a>
                  </li>
                  <li className="cu_footer_list_item">
                    <a className="cu_footer_list_item_link" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="cu_footer_list_item">
                    <a className="cu_footer_list_item_link" href="#">
                      Terms of use
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 order-2 order-lg-4">
              <div className="cu_footer_newsletter">
                <h5 className="cu_newsletter_title">Newsletter</h5>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="cu_form-control"
                    placeholder="Your email"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    <NextImage src={imagePath.RightArrow} alt="Arrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ color: '#212121' }} />

          <p className="cu_footer_copyrights text-center">
            © 2023 Coden UI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
