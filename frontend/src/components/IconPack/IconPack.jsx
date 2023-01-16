import React from 'react';
import Figma from '../../assets/img/icon/Figma-icon.svg';
import PngIcon from '../../assets/img/icon/icon-pack-png-icon.svg';
import SvgIcon from '../../assets/img/icon/icon-pack-svg-icon.svg';
import WebFlow from '../../assets/img/icon/Webflow-icon.svg';
import IconPackFea from '../../assets/img/media/icon-pack-fea.jpg';
import NextImage from '../Shared/Image/NextImage';

export default function IconPack() {
  return (
    <section>
      <div class="cu_icon_pack_wrapper pt-76 pb-100">
        <div class="container">
          <div class="row gy-4 mb-50">
            <div class="col-lg-4">
              <div class="cu_icon_pack_card">
                <div class="cu_icon_pack_card_fea_img">
                  <NextImage
                    class="cu_icon_pack_card_img"
                    src={IconPackFea}
                    alt="iconpackfea"
                  />
                </div>

                <div class="cu_icon_pack_card_details">
                  <div class="cu_icon_pack_free">
                    <p class="cu_icon_pack_free_text">Free</p>
                  </div>
                  <h4 class="cu_icon_pack_card_title">
                    Business Management Web UI Kit
                  </h4>
                  <div class="cu_icon_pack_card_footer d-flex align-items-center">
                    <p class="cu_icon_pack_card_footer_text">Source Files:</p>
                    <div class="cu_icon_pack_card_version">
                      <a href="#" class="cu_icon_pack_card_version_link">
                        <NextImage
                          class="cu_icon_pack_card_version_img"
                          src={Figma}
                          alt="figma"
                        />
                      </a>
                      <a href="#" class="cu_icon_pack_card_version_link">
                        <NextImage
                          class="cu_icon_pack_card_version_img"
                          src={WebFlow}
                          alt="webflow"
                        />
                      </a>
                      <a href="#" class="cu_icon_pack_card_version_link">
                        <NextImage
                          class="cu_icon_pack_card_version_img"
                          src={SvgIcon}
                          alt="svgicon"
                        />
                      </a>
                      <a href="#" class="cu_icon_pack_card_version_link">
                        <NextImage
                          class="cu_icon_pack_card_version_img"
                          src={PngIcon}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="cu_icon_pack_card">
                <div class="cu_icon_pack_card_fea_img">
                  <NextImage
                    class="cu_icon_pack_card_img"
                    src={IconPackFea}
                    alt="iconpackfea"
                  />
                </div>

                <div class="cu_icon_pack_card_details">
                  <div class="cu_icon_pack_free">
                    <p class="cu_icon_pack_free_text">Free</p>
                  </div>
                  <h4 class="cu_icon_pack_card_title">
                    Business Management Web UI Kit
                  </h4>
                  <div class="cu_icon_pack_card_footer d-flex align-items-center">
                    <p class="cu_icon_pack_card_footer_text">Source Files:</p>
                    <div class="cu_icon_pack_card_version">
                      <a href="#" class="cu_icon_pack_card_version_link">
                        <NextImage
                          class="cu_icon_pack_card_version_img"
                          src={Figma}
                          alt="figma"
                        />
                      </a>
                      <a href="#" class="cu_icon_pack_card_version_link">
                        <NextImage
                          class="cu_icon_pack_card_version_img"
                          src={WebFlow}
                          alt="webflow"
                        />
                      </a>
                      <a href="#" class="cu_icon_pack_card_version_link">
                        <NextImage
                          class="cu_icon_pack_card_version_img"
                          src={SvgIcon}
                          alt="svgicon"
                        />
                      </a>
                      <a href="#" class="cu_icon_pack_card_version_link">
                        <NextImage
                          class="cu_icon_pack_card_version_img"
                          src={PngIcon}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="cu_icon_pack_card">
                <div class="cu_icon_pack_card_fea_img">
                  <NextImage
                    class="cu_icon_pack_card_img"
                    src={IconPackFea}
                    alt="iconpackfea"
                  />
                </div>

                <div class="cu_icon_pack_card_details">
                  <div class="cu_icon_pack_free">
                    <p class="cu_icon_pack_free_text">Free</p>
                  </div>
                  <h4 class="cu_icon_pack_card_title">
                    Business Management Web UI Kit
                  </h4>
                  <div class="cu_icon_pack_card_footer d-flex align-items-center">
                    <p class="cu_icon_pack_card_footer_text">Source Files:</p>
                    <div class="cu_icon_pack_card_version">
                      <a href="#" class="cu_icon_pack_card_version_link">
                        <NextImage
                          class="cu_icon_pack_card_version_img"
                          src={Figma}
                          alt="figma"
                        />
                      </a>
                      <a href="#" class="cu_icon_pack_card_version_link">
                        <NextImage
                          class="cu_icon_pack_card_version_img"
                          src={WebFlow}
                          alt="webflow"
                        />
                      </a>
                      <a href="#" class="cu_icon_pack_card_version_link">
                        <NextImage
                          class="cu_icon_pack_card_version_img"
                          src={SvgIcon}
                          alt="svgicon"
                        />
                      </a>
                      <a href="#" class="cu_icon_pack_card_version_link">
                        <NextImage
                          class="cu_icon_pack_card_version_img"
                          src={PngIcon}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="m-auto text-center" style={{ width: '20%' }}>
            <a href="#" class="cu_coded_tem_view_all_btn">
              Load More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
