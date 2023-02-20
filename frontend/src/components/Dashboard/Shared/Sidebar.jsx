import React from 'react';
import NextLink from '../../Shared/NextLink/NextLink';

export default function Sidebar() {
  return (
    <aside className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <NextLink
            className="nav-link"
            data-bs-toggle="collapse"
            href="/codenui/template/upload"
            aria-expanded="false"
            aria-controls="general-pages"
          >
            <span className="menu-title">Template</span>
          </NextLink>
        </li>

        <li className="nav-item">
          <NextLink
            className="nav-link"
            data-bs-toggle="collapse"
            href="/codenui/icon/upload"
            aria-expanded="false"
            aria-controls="general-pages"
          >
            <span className="menu-title">Icon</span>
          </NextLink>
        </li>
      </ul>
    </aside>
  );
}
