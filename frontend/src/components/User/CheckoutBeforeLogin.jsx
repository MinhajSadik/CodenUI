import React from 'react';
import imagePath from '../../assets/img/imagePath';
import NextImage from '../Shared/NextImage/NextImage';
import NextLink from '../Shared/NextLink/NextLink';

export default function CheckoutBeforeLogin() {
  return (
    <section className="cu_checkout_page_wrapper">
      <div className="container pt-60">
        <NextLink href="" className="cu_back_btn">
          {' '}
          <NextImage
            className="cu_top_left_arrow_icon"
            src={imagePath.LeftArrow}
            alt="left-arrow.svg"
          />{' '}
          Back
        </NextLink>

        <div className="text-center cu_checkout_page_logo">
          <NextImage className="m-auto" src={imagePath.Logo} alt="" />
        </div>

        <div className="col-lg-6 m-auto pt-106">
          <p className="cu_order_details_title">Order Details</p>
          <div className="cu_product_details_box">
            <div className="d-flex justify-content-between">
              <p className="cu_product_details">Plan Name</p>
              <p className="cu_product_details">Item Price</p>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-20">
              <p className="cu_product_name">
                <NextImage
                  className="cu_product_icon"
                  src={imagePath.CrownIcon}
                  alt=""
                />
                Coden UI Yearly
              </p>
              <p className="cu_product_price">$99 USD</p>
            </div>
          </div>
          <p className="cu_personal_info_title">Personal Information</p>
          <div className="cu_personal_info_box">
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Enter your name"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Enter your email"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="password" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Confirm Password"
                />
              </div>
            </form>
          </div>
          <form className="row g-3 mt-20">
            <p className="cu_form_msg_text">
              Already have an account?{' '}
              <NextLink href="" className="color-red">
                Sign in
              </NextLink>{' '}
            </p>

            <div className="col-12">
              <button type="submit" className="cu_checkout_btn w-100">
                Confirm & Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
