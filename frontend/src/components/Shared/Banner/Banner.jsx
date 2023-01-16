import React from 'react';
import Search from '../../../assets/img/icon/hero-search-icon.svg';
import NextImage from '../Image/NextImage';
import NextLink from '../Link/NextLink';

export default function Banner({ title }) {
  return (
    <section>
      <div className="cu_banner_wrapper">
        <h1 className="cu_banner_title text-center pt-50"> {title} </h1>

        <div className="cu_banner_search_box">
          <input
            type="text"
            id="cu_banner_search"
            placeholder="Search templates..."
          />
          <NextLink href="search" className="cu_banner_search_bar">
            <NextImage className="cu_banner_serach_icon" src={Search} alt="" />
            Search
          </NextLink>
        </div>
      </div>
    </section>
  );
}