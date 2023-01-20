import React from 'react';
import imagePath from '../../../utils/imagePath';
import NextImage from '../Shared/Image/NextImage';
import NextLink from '../Shared/Link/NextLink';

export default function SingleIcon() {
  const [open, setOpen] = React.useState(false);
  return (
    <section>
      <div className="cu_icon_pack_wrapper pt-76 pb-100">
        <div className="container">
          <div className="row gy-4 mb-50">
            <div className="col-lg-3 ">
              <div className="d-flex justify-content-center align-items-center">
                <NextLink href="">
                  <NextImage
                    className="cu_single_back_icon"
                    src={imagePath.BackIcon}
                    alt="backIcon"
                  />
                </NextLink>
                <p className="cu_icon_pack_single_text">
                  Weather Icon Pack (30 Icons)
                </p>
              </div>
            </div>

            <div className="col-lg-4 offset-5">
              <div className="cu_switch_box">
                <NextLink href="" className="cu_switch_style_outline">
                  Outline
                </NextLink>
                <NextLink href="" className="cu_switch_style_solid">
                  Solid
                </NextLink>
                <NextLink href="" className="cu_switch_style_duotone">
                  Duotone
                </NextLink>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="cu_single_icon_card  text-center">
                <div className="cu_single_icon_card_fea_img">
                  <NextLink
                    id="action"
                    className="cu_single_icon popup "
                    href=""
                  />
                  <NextImage
                    className="cu_single_icon_card_img"
                    src={imagePath.AddWallet}
                    onClick={() => console.log(open)}
                    alt=""
                  />
                  {open && (
                    <div id="popup" className="cu_single_icon_popup">
                      <NextImage
                        className="cu_selected_icon"
                        src={imagePath.PopupIcon}
                        alt="popup"
                      />
                      <p className="cu_icon_name">Arrow Left</p>

                      <div className="cu_icon_copy_box">
                        <div className="">
                          <NextLink
                            href=""
                            className="cu_icon_copy_btn copy-webflow"
                          >
                            <NextImage
                              className="cu_icon_webflow"
                              src={imagePath.WebFlowSq}
                              alt=""
                            />
                            Copy for Webflow
                          </NextLink>
                          <NextLink
                            href=""
                            className="cu_icon_copy_btn copy-webflow"
                          >
                            <NextImage
                              className="cu_icon_figma"
                              src={imagePath.FigmaSq}
                              alt=""
                            />
                            Copy for Figma
                          </NextLink>
                        </div>

                        <div className="mt-20">
                          <NextLink
                            href=""
                            className="cu_icon_copy_btn copy-svg"
                          >
                            <NextImage
                              className="cu_icon_webflow"
                              src={imagePath.SvgIconSq}
                              alt="svgIcon"
                            />
                            Download as SVG
                          </NextLink>
                          <NextLink
                            href=""
                            className="cu_icon_copy_btn copy-png"
                          >
                            <NextImage
                              className="cu_icon_figma"
                              src={imagePath.PngIconSq}
                              alt="pngIcon"
                            />
                            Download as PNG
                          </NextLink>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
