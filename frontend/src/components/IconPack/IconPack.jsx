import React from 'react';
import imagePath from '../../assets/images/imagePath';
import NextImage from '../Shared/NextImage/NextImage';
import NextLink from '../Shared/NextLink/NextLink';

export default function IconPack({ route }) {
  return (
    <section className="cu_icon_pack_wrapper pt-76">
      <div className="container">
        {route === '/' && (
          <div className="cu_coded_blocks_textbox">
            <h2 className="cu_coded_blocks_title">Icon Pack</h2>
          </div>
        )}
        <div className="row gy-4 mb-50">
          <div className="col-lg-4">
            <div className="cu_icon_pack_card">
              <NextLink href="/icon-pack/single">
                <div className="cu_icon_pack_card_fea_img">
                  <NextImage
                    className="cu_icon_pack_card_img"
                    src={imagePath.IconPackFea}
                    alt="iconpackfea"
                  />
                </div>
              </NextLink>
              <div className="cu_icon_pack_card_details">
                <NextLink href="/icon-pack/single">
                  <div className="cu_icon_pack_free">
                    <p className="cu_icon_pack_free_text">Free</p>
                  </div>
                  <h4 className="cu_icon_pack_card_title">
                    Business Management Web UI Kit
                  </h4>
                </NextLink>

                <div className="cu_icon_pack_card_footer d-flex align-items-center">
                  <p className="cu_icon_pack_card_footer_text">Source Files:</p>
                  <div className="cu_icon_pack_card_version">
                    <NextLink
                      href=""
                      className="cu_icon_pack_card_version_link"
                    >
                      <NextImage
                        className="cu_icon_pack_card_version_img"
                        src={imagePath.Figma}
                        alt="figma"
                      />
                    </NextLink>
                    <NextLink
                      href=""
                      className="cu_icon_pack_card_version_link"
                    >
                      <NextImage
                        className="cu_icon_pack_card_version_img"
                        src={imagePath.WebFlow}
                        alt="webflow"
                      />
                    </NextLink>
                    <NextLink
                      href=""
                      className="cu_icon_pack_card_version_link"
                    >
                      <NextImage
                        className="cu_icon_pack_card_version_img"
                        src={imagePath.SvgIcon}
                        alt="svgicon"
                      />
                    </NextLink>
                    <NextLink
                      href=""
                      className="cu_icon_pack_card_version_link"
                    >
                      <NextImage
                        className="cu_icon_pack_card_version_img"
                        src={imagePath.PngIcon}
                        alt=""
                      />
                    </NextLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="cu_icon_pack_card">
              <NextLink href="/icon-pack/single">
                <div className="cu_icon_pack_card_fea_img">
                  <NextImage
                    className="cu_icon_pack_card_img"
                    src={imagePath.IconPackFea}
                    alt="iconpackfea"
                  />
                </div>
              </NextLink>
              <div className="cu_icon_pack_card_details">
                <NextLink href="/icon-pack/single">
                  <div className="cu_icon_pack_free">
                    <p className="cu_icon_pack_free_text">Free</p>
                  </div>
                  <h4 className="cu_icon_pack_card_title">
                    Business Management Web UI Kit
                  </h4>
                </NextLink>

                <div className="cu_icon_pack_card_footer d-flex align-items-center">
                  <p className="cu_icon_pack_card_footer_text">Source Files:</p>
                  <div className="cu_icon_pack_card_version">
                    <NextLink
                      href=""
                      className="cu_icon_pack_card_version_link"
                    >
                      <NextImage
                        className="cu_icon_pack_card_version_img"
                        src={imagePath.Figma}
                        alt="figma"
                      />
                    </NextLink>
                    <NextLink
                      href=""
                      className="cu_icon_pack_card_version_link"
                    >
                      <NextImage
                        className="cu_icon_pack_card_version_img"
                        src={imagePath.WebFlow}
                        alt="webflow"
                      />
                    </NextLink>
                    <NextLink
                      href=""
                      className="cu_icon_pack_card_version_link"
                    >
                      <NextImage
                        className="cu_icon_pack_card_version_img"
                        src={imagePath.SvgIcon}
                        alt="svgicon"
                      />
                    </NextLink>
                    <NextLink
                      href=""
                      className="cu_icon_pack_card_version_link"
                    >
                      <NextImage
                        className="cu_icon_pack_card_version_img"
                        src={imagePath.PngIcon}
                        alt=""
                      />
                    </NextLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="cu_icon_pack_card">
              <NextLink href="/icon-pack/single">
                <div className="cu_icon_pack_card_fea_img">
                  <NextImage
                    className="cu_icon_pack_card_img"
                    src={imagePath.IconPackFea}
                    alt="iconpackfea"
                  />
                </div>
              </NextLink>
              <div className="cu_icon_pack_card_details">
                <NextLink href="/icon-pack/single">
                  <div className="cu_icon_pack_free">
                    <p className="cu_icon_pack_free_text">Free</p>
                  </div>
                  <h4 className="cu_icon_pack_card_title">
                    Business Management Web UI Kit
                  </h4>
                </NextLink>

                <div className="cu_icon_pack_card_footer d-flex align-items-center">
                  <p className="cu_icon_pack_card_footer_text">Source Files:</p>
                  <div className="cu_icon_pack_card_version">
                    <NextLink
                      href=""
                      className="cu_icon_pack_card_version_link"
                    >
                      <NextImage
                        className="cu_icon_pack_card_version_img"
                        src={imagePath.Figma}
                        alt="figma"
                      />
                    </NextLink>
                    <NextLink
                      href=""
                      className="cu_icon_pack_card_version_link"
                    >
                      <NextImage
                        className="cu_icon_pack_card_version_img"
                        src={imagePath.WebFlow}
                        alt="webflow"
                      />
                    </NextLink>
                    <NextLink
                      href=""
                      className="cu_icon_pack_card_version_link"
                    >
                      <NextImage
                        className="cu_icon_pack_card_version_img"
                        src={imagePath.SvgIcon}
                        alt="svgicon"
                      />
                    </NextLink>
                    <NextLink
                      href=""
                      className="cu_icon_pack_card_version_link"
                    >
                      <NextImage
                        className="cu_icon_pack_card_version_img"
                        src={imagePath.PngIcon}
                        alt=""
                      />
                    </NextLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="m-auto text-center" style={{ width: '20%' }}>
          <NextLink href="icon-pack" className="cu_coded_tem_view_all_btn">
            Load More
          </NextLink>
        </div>
      </div>
    </section>
  );
}
