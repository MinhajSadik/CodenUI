import React from 'react';
import imagePath from '../../assets/images/imagePath';
import NextImage from '../Shared/NextImage/NextImage';
import NextLink from '../Shared/NextLink/NextLink';

export default function CheckoutAfterLogin() {
  return (
    <section className="cu_checkout_after_page_wrapper">
      <div className="container pt-60">
        <NextLink href="" className="cu_back_btn">
          <NextImage
            className="cu_top_left_arrow_icon"
            src={imagePath.LeftArrow}
            alt="leftArrow"
          />{' '}
          Back
        </NextLink>

        <div className="text-center cu_checkout_after_logo">
          <NextImage className="m-auto" src={imagePath.Logo} alt="Logo" />
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
                  alt="crown"
                />
                Coden UI Yearly
              </p>
              <p className="cu_product_price">$99 USD</p>
            </div>
          </div>
          <p className="cu_checkout_after_personal_info_title">
            Personal Information
          </p>
          <div className="cu_checkout_after_personal_info_box">
            <p className="cu_checkout_after_name">
              Name: <span>Monowar H Minar</span>
            </p>
            <p className="cu_checkout_after_email">
              Email: <span>monowarminar@gmail.com</span>{' '}
            </p>
          </div>
          <form className="row g-3 mt-20">
            <div className="col-12">
              <button type="submit" className="cu_checkout_after_btn w-100">
                Confirm & Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
