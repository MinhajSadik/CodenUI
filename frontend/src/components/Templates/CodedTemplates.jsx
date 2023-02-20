import React from 'react';
import imagePath from '../../assets/images/imagesPath';
import NextImage from '../Shared/NextImage/NextImage';
import NextLink from '../Shared/NextLink/NextLink';

export default function CodedTemplates({ route }) {
  return (
    <section className="cu_coded_tem_wrapper pt-76">
      <div className="container">
        {route === '/' && (
          <div className="cu_coded_blocks_textbox">
            <h2 className="cu_coded_blocks_title">Coded Templates</h2>
          </div>
        )}

        <div className="row gy-4 mb-32">
          <div className="col-lg-4 sm-mt-20">
            <div className="cu_coded_tem_card">
              <div className="cu_coded_tem_card_fea_img">
                <NextImage
                  className="cu_coded_tem_card_img"
                  src={imagePath.WebKit}
                  alt="webkit"
                />
              </div>

              <div className="cu_coded_tem_card_details">
                <div className="cu_coded_tem_free">
                  <p className="cu_coded_tem_free_text">Free</p>
                </div>
                <h4 className="cu_coded_tem_card_title">
                  Business Management Web UI Kit
                </h4>
                <div className="cu_coded_tem_card_footer d-flex align-items-center">
                  <p className="cu_coded_tem_card_footer_text">Source Files:</p>
                  <div className="cu_coded_tem_card_version">
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.Figma}
                        alt="figma"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.Html}
                        alt="html"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.Bootstrap}
                        alt="bootstrap"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.Tailwind}
                        alt="tailwind"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.WebFlow}
                        alt="webFlow"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.NextJs}
                        alt="nextJs"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.Gatsby}
                        alt="gatsby"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.VueJs}
                        alt="vueJs"
                      />
                    </NextLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 sm-mt-20">
            <div className="cu_coded_tem_card">
              <div className="cu_coded_tem_card_fea_img">
                <NextImage
                  className="cu_coded_tem_card_img"
                  src={imagePath.WebKit}
                  alt="webkit"
                />
              </div>

              <div className="cu_coded_tem_card_details">
                <div className="cu_coded_tem_pre">
                  <p className="cu_coded_tem_pre_text">Premium</p>
                </div>
                <h4 className="cu_coded_tem_card_title">
                  Business Management Web UI Kit
                </h4>
                <div className="cu_coded_tem_card_footer d-flex align-items-center">
                  <p className="cu_coded_tem_card_footer_text">Source Files:</p>
                  <div className="cu_coded_tem_card_version">
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.Figma}
                        alt="figma"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.Html}
                        alt="html"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.Bootstrap}
                        alt="bootstrap"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.Tailwind}
                        alt="tailwind"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.WebFlow}
                        alt="webflow"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.NextJs}
                        alt="nextjs"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.Gatsby}
                        alt="gatsby"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.VueJs}
                        alt="vuejs"
                      />
                    </NextLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 sm-mt-20">
            <div className="cu_coded_tem_card">
              <div className="cu_coded_tem_card_fea_img">
                <NextImage
                  className="cu_coded_tem_card_img"
                  src={imagePath.WebKit}
                  alt="webkit"
                />
              </div>

              <div className="cu_coded_tem_card_details">
                <div className="cu_coded_tem_pre">
                  <p className="cu_coded_tem_pre_text">Premium</p>
                </div>
                <h4 className="cu_coded_tem_card_title">
                  Business Management Web UI Kit
                </h4>
                <div className="cu_coded_tem_card_footer d-flex align-items-center">
                  <p className="cu_coded_tem_card_footer_text">Source Files:</p>
                  <div className="cu_coded_tem_card_version">
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.Figma}
                        alt="figma"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.Html}
                        alt="html"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.Bootstrap}
                        alt="bootstap"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.Tailwind}
                        alt="tailwind"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.WebFlow}
                        alt="webFlow"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.NextJs}
                        alt="nextJs"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.Gatsby}
                        alt="gatsby"
                      />
                    </NextLink>
                    <NextLink
                      href="#"
                      className="cu_coded_tem_card_version_link"
                    >
                      <NextImage
                        className="cu_coded_tem_card_version_img"
                        src={imagePath.VueJs}
                        alt="vueJs"
                      />
                    </NextLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cu_coded_tem_view_all_btn_box m-auto text-center">
          <NextLink
            href="coded-templates"
            className="cu_coded_tem_view_all_btn"
          >
            Veiw All
          </NextLink>
        </div>
      </div>
    </section>
  );
}
