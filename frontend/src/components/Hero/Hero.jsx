import React from 'react';
import Bootstrap from '../../assets/img/icon/Bootstrap-icon.svg';
import Figma from '../../assets/img/icon/Figma-icon.svg';
import Gatsby from '../../assets/img/icon/Gatsby-icon.svg';
import SearchIcon from '../../assets/img/icon/hero-search-icon.svg';
import HTML from '../../assets/img/icon/HTML-icon.svg';
import Nextjs from '../../assets/img/icon/nextjs-icon.svg';
import Tailwind from '../../assets/img/icon/Tailwind-css-icon.svg';
import vueJs from '../../assets/img/icon/vueJs-icon.svg';
import WebFlow from '../../assets/img/icon/Webflow-icon.svg';
import NextImage from '../Shared/Image/NextImage';

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
                <NextImage className="cu_tem_icon" src={Figma} alt="figma" />
                <div className="cu_tooltip">
                  <p className="cu_tooltip_text">Figma</p>
                </div>
              </a>

              <a className="cu_tem_version_link" href="#">
                <NextImage className="cu_tem_icon" src={HTML} alt="" />
                <div className="cu_tooltip">
                  <p className="cu_tooltip_text">HTML</p>
                </div>
              </a>
              <a className="cu_tem_version_link" href="#">
                <NextImage className="cu_tem_icon" src={Bootstrap} alt="" />
                <div className="cu_tooltip">
                  <p className="cu_tooltip_text">Bootstrap</p>
                </div>
              </a>
              <a className="cu_tem_version_link" href="#">
                <NextImage className="cu_tem_icon" src={Tailwind} alt="" />
                <div className="cu_tooltip">
                  <p className="cu_tooltip_text">Tailwind</p>
                </div>
              </a>
              <a className="cu_tem_version_link" href="#">
                <NextImage className="cu_tem_icon" src={WebFlow} alt="" />
                <div className="cu_tooltip">
                  <p className="cu_tooltip_text">Webflow</p>
                </div>
              </a>
              <a className="cu_tem_version_link" href="#">
                <NextImage className="cu_tem_icon" src={Nextjs} alt="" />
                <div className="cu_tooltip">
                  <p className="cu_tooltip_text">Nextjs</p>
                </div>
              </a>
              <a className="cu_tem_version_link" href="#">
                <NextImage className="cu_tem_icon" src={Gatsby} alt="" />
                <div className="cu_tooltip">
                  <p className="cu_tooltip_text">Gatsby</p>
                </div>
              </a>
              <a className="cu_tem_version_link" href="#">
                <NextImage className="cu_tem_icon" src={vueJs} alt="" />
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
                <NextImage className="cu_serach_icon" src={SearchIcon} alt="" />
                Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
