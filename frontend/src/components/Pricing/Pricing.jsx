import React from 'react';
import withRoute from '../../../utils/withRoute';
import imagePath from '../../assets/img/imagePath';
import NextImage from '../Shared/Image/NextImage';

function Pricing() {
  return (
    <section className="cu_pricing_plan_wrapper pt-70 pb-110">
      <div className="container">
        <div className="cu_pricing_plan_content text-center m-auto">
          <h2 className="cu_pricing_plan_title">
            Grab the deal for your next project
          </h2>
          <p className="cu_pricing_plan_text">
            Take advantage of our incredible deal and start building your dream
            business today.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 offset-lg-2">
            <div className="cu_pricing_card">
              <div className="cu_pricing_pack_limit d-flex">
                <NextImage
                  className="cu_pricing_pack_icon"
                  src={imagePath.CrownIcon}
                  alt="crown"
                />
                <h6 className="cu_pricing_pack_limit_title">Yearly</h6>
              </div>
              <p className="cu_pricing_pack_limit_text">
                <span className="cu_pricing_pack_limit_text_span">$99 </span>/
                Billed Per Year
              </p>
              <ul className="cu_package_items">
                <li className="cu_package_item">
                  <NextImage
                    className="cu_list_icon"
                    src={imagePath.PIcon}
                    alt="p_list_icon.svg"
                  />
                  Quality Resources
                </li>
                <li className="cu_package_item pt-16">
                  <NextImage
                    className="cu_list_icon"
                    src={imagePath.PIcon}
                    alt="p_list_icon.svg"
                  />
                  Clean Code
                </li>
                <li className="cu_package_item pt-16">
                  <NextImage
                    className="cu_list_icon"
                    src={imagePath.PIcon}
                    alt="p_list_icon.svg"
                  />
                  Responsive All Device
                </li>
                <li className="cu_package_item pt-16">
                  <NextImage
                    className="cu_list_icon"
                    src={imagePath.PIcon}
                    alt="p_list_icon.svg"
                  />
                  Multiple File Format
                </li>
                <li className="cu_package_item pt-16">
                  <NextImage
                    className="cu_list_icon"
                    src={imagePath.PIcon}
                    alt="p_list_icon.svg"
                  />
                  Tons of Icons
                </li>
                <li className="cu_package_item pt-16">
                  <NextImage
                    className="cu_list_icon"
                    src={imagePath.PIcon}
                    alt="p_list_icon.svg"
                  />
                  Single User Licenses
                </li>
                <li className="cu_package_item pt-16">
                  <NextImage
                    className="cu_list_icon"
                    src={imagePath.PIcon}
                    alt="p_list_icon.svg"
                  />
                  Icon Download/Copy
                  <span className="cu_package_item_span"> 150</span> Per Day
                </li>
                <li className="cu_package_item pt-16">
                  <NextImage
                    className="cu_list_icon"
                    src={imagePath.PIcon}
                    alt="p_list_icon.svg"
                  />
                  Others Category Download
                  <span className="cu_package_item_span"> 10</span> Per Day
                </li>
                <li className="cu_package_item pt-16">
                  <NextImage
                    className="cu_list_icon"
                    src={imagePath.PIcon}
                    alt="p_list_icon.svg"
                  />
                  Premium support
                </li>
              </ul>

              <a href="" className="cu_pack_yr_btn">
                Get Started
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="cu_ld_pricing_card">
              <div className="cu_pricing_pack_limit d-flex">
                <NextImage
                  className="cu_ld_pricing_pack_icon"
                  src={imagePath.DimondIcon}
                  alt="lifetime_deal-diamond-icon"
                />
                <h6 className="cu_ld_pricing_pack_limit_title">
                  Lifetime Deal
                </h6>
              </div>
              <p className="cu_ld_pricing_pack_limit_text">
                <span className="cu_ld_pricing_pack_limit_text_span">
                  $129{' '}
                </span>
                / Billed Per Year
              </p>
              <ul className="cu_ld_package_items">
                <li className="cu_ld_package_item">
                  <NextImage
                    className="cu_ld_list_icon"
                    src={imagePath.LIcon}
                    alt="l_list_icon.svg"
                  />
                  Quality Resources
                </li>
                <li className="cu_ld_package_item pt-16">
                  <NextImage
                    className="cu_ld_list_icon"
                    src={imagePath.LIcon}
                    alt="l_list_icon.svg"
                  />
                  Clean Code
                </li>
                <li className="cu_ld_package_item pt-16">
                  <NextImage
                    className="cu_ld_list_icon"
                    src={imagePath.LIcon}
                    alt="l_list_icon.svg"
                  />
                  Responsive All Device
                </li>
                <li className="cu_ld_package_item pt-16">
                  <NextImage
                    className="cu_ld_list_icon"
                    src={imagePath.LIcon}
                    alt="l_list_icon.svg"
                  />
                  Multiple File Format
                </li>
                <li className="cu_ld_package_item pt-16">
                  <NextImage
                    className="cu_ld_list_icon"
                    src={imagePath.LIcon}
                    alt="l_list_icon.svg"
                  />
                  Tons of Icons
                </li>
                <li className="cu_ld_package_item pt-16">
                  <NextImage
                    className="cu_ld_list_icon"
                    src={imagePath.LIcon}
                    alt="l_list_icon.svg"
                  />
                  Single User Licenses
                </li>
                <li className="cu_ld_package_item pt-16">
                  <NextImage
                    className="cu_ld_list_icon"
                    src={imagePath.LIcon}
                    alt="l_list_icon.svg"
                  />
                  Icon Download/Copy
                  <span className="cu_ld_package_item_span"> 150</span> Per Day
                </li>
                <li className="cu_ld_package_item pt-16">
                  <NextImage
                    className="cu_ld_list_icon"
                    src={imagePath.LIcon}
                    alt="l_list_icon.svg"
                  />
                  Others Category Download
                  <span className="cu_ld_package_item_span"> 10</span> Per Day
                </li>
                <li className="cu_ld_package_item pt-16">
                  <NextImage
                    className="cu_ld_list_icon"
                    src={imagePath.LIcon}
                    alt="l_list_icon.svg"
                  />
                  Premium support
                </li>
              </ul>
              <a href="" className="cu_ld_pack_yr_btn">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withRoute(Pricing);
