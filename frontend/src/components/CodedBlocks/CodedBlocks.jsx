import React from 'react';
import imagePath from '../../assets/img/imagePath';
import NextImage from '../Shared/Image/NextImage';
import NextLink from '../Shared/Link/NextLink';

export default function CodedBlocks({ route }) {
  return (
    <section className="cu_coded_blocks_wrapper pt-76 pb-100">
      <div className="container">
        {route === '/' && (
          <div className="cu_coded_blocks_textbox">
            <h2 className="cu_coded_blocks_title">Coded Blocks</h2>
          </div>
        )}
        <div className="row gy-4 mb-50">
          <div className="col-lg-4">
            <div className="cu_coded_blocks_card">
              <div className="cu_coded_blocks_card_fea_img">
                <NextImage
                  className="cu_coded_blocks_card_img"
                  src={imagePath.CodedBlocks2}
                  alt="codedblocks"
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
                        src={imagePath.HTML}
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
          <div className="col-lg-4">
            <div className="cu_coded_blocks_card">
              <div className="cu_coded_blocks_card_fea_img">
                <NextImage
                  className="cu_coded_blocks_card_img"
                  src={imagePath.CodedBlocksPre}
                  alt="codedBlocksPre"
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
                        src={imagePath.HTML}
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
          <div className="col-lg-4">
            <div className="cu_coded_blocks_card">
              <div className="cu_coded_blocks_card_fea_img">
                <NextImage
                  className="cu_coded_blocks_card_img"
                  src={imagePath.CodedBlocks2}
                  alt="codedBlocks"
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
                        src={imagePath.HTML}
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
        </div>

        <div className="m-auto text-center" style={{ width: ' 20%' }}>
          <NextLink href="coded-blocks" className="cu_coded_tem_view_all_btn">
            Load More
          </NextLink>
        </div>
      </div>
    </section>
  );
}
