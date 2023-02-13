import React from 'react';
import imagePath from '../../assets/img/imagePath';
import NextImage from '../Shared/NextImage/NextImage';

export default function Hero() {
  return (
    <section>
      <div className="cu_hero_wrapper">
        <div className="container">
          <div className="cu_hero_content_wrapper text-center">
            <h1 className="cu_hero_title m-auto">
              Grow Your Business with our
              <span className="cu_title_span_one"> Design</span> and
              <span className="cu_title_span_two"> Coded Templates</span>
            </h1>
            <p className="cu_hero_text m-auto">
              Break through all those limitations & start your own business with
              the coded templates provided by us.
            </p>

            <div className="cu_tem_version">
              <a className="cu_tem_version_link" href="#">
                <NextImage
                  className="cu_tem_icon"
                  src={imagePath.Figma}
                  alt="figma"
                />
                <div className="cu_tooltip">
                  <p className="cu_tooltip_text">Figma</p>
                </div>
              </a>

              <a className="cu_tem_version_link" href="#">
                <NextImage
                  className="cu_tem_icon"
                  src={imagePath.Html}
                  alt=""
                />
                <div className="cu_tooltip">
                  <p className="cu_tooltip_text">HTML</p>
                </div>
              </a>
              <a className="cu_tem_version_link" href="#">
                <NextImage
                  className="cu_tem_icon"
                  src={imagePath.Bootstrap}
                  alt=""
                />
                <div className="cu_tooltip">
                  <p className="cu_tooltip_text">Bootstrap</p>
                </div>
              </a>
              <a className="cu_tem_version_link" href="#">
                <NextImage
                  className="cu_tem_icon"
                  src={imagePath.Tailwind}
                  alt=""
                />
                <div className="cu_tooltip">
                  <p className="cu_tooltip_text">Tailwind</p>
                </div>
              </a>
              <a className="cu_tem_version_link" href="#">
                <NextImage
                  className="cu_tem_icon"
                  src={imagePath.WebFlow}
                  alt=""
                />
                <div className="cu_tooltip">
                  <p className="cu_tooltip_text">Webflow</p>
                </div>
              </a>
              <a className="cu_tem_version_link" href="#">
                <NextImage
                  className="cu_tem_icon"
                  src={imagePath.NextJs}
                  alt=""
                />
                <div className="cu_tooltip">
                  <p className="cu_tooltip_text">Nextjs</p>
                </div>
              </a>
              <a className="cu_tem_version_link" href="#">
                <NextImage
                  className="cu_tem_icon"
                  src={imagePath.Gatsby}
                  alt=""
                />
                <div className="cu_tooltip">
                  <p className="cu_tooltip_text">Gatsby</p>
                </div>
              </a>
              <a className="cu_tem_version_link" href="#">
                <NextImage
                  className="cu_tem_icon"
                  src={imagePath.VueJs}
                  alt=""
                />
                <div className="cu_tooltip">
                  <p className="cu_tooltip_text">vueJs</p>
                </div>
              </a>
            </div>

            <div className="cu_hero_search_box m-auto">
              <input
                type="text"
                id="cu_search"
                placeholder="Search templates..."
              />
              <a href="#" className="cu_serach_bar">
                <NextImage
                  className="cu_serach_icon"
                  src={imagePath.Search}
                  alt=""
                />
                Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
