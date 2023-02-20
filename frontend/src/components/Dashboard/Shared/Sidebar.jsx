import React from 'react';

export default function Sidebar() {
  return (
    <aside className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="/codenui/template/upload"
            aria-expanded="false"
            aria-controls="general-pages"
          >
            <span className="menu-title">Template</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="general-pages">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" href="">
                  Add Coded Templates
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  View Coded Templates
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="/codenui/icon/upload"
            aria-expanded="false"
            aria-controls="general-pages"
          >
            <span className="menu-title">Icon</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" href="">
                  Add Icon
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  View Icons
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </aside>
  );
}
