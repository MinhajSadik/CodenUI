import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Dashboard() {
  return (
    <div className="container-scroller">
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item nav-profile">
              <a href="#" className="nav-link">
                <div className="nav-profile-image">
                  <img src="assets/images/faces/face1.jpg" alt="profile" />
                  <span className="login-status online"></span>
                </div>
                <div className="nav-profile-text d-flex flex-column">
                  <span className="font-weight-bold mb-2">David Grey. H</span>
                  <span className="text-secondary text-small">
                    Project Manager
                  </span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                <span className="menu-title">Dashboard</span>
                <i className="mdi mdi-home menu-icon"></i>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="collapse"
                href="#general-pages"
                aria-expanded="false"
                aria-controls="general-pages"
              >
                <span className="menu-title">Coded Templates</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="general-pages">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/forms/form.html">
                      {" "}
                      Add Coded Templates{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/tables/table.html">
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
                href="#general-pages"
                aria-expanded="false"
                aria-controls="general-pages"
              >
                <span className="menu-title">Sample Pages</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="general-pages">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/login.html">
                      {" "}
                      Login{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/register.html">
                      {" "}
                      Register{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="pages/samples/error-404.html">
                      {" "}
                      404{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">
                <span className="page-title-icon bg-gradient-primary text-white me-2">
                  <i className="mdi mdi-home"></i>
                </span>{" "}
                Dashboard
              </h3>
              <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    <span></span>Overview{" "}
                    <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="row">
              <div className="col-md-4 stretch-card grid-margin">
                <div className="card bg-gradient-danger card-img-holder text-white">
                  <div className="card-body">
                    <img
                      src="assets/images/dashboard/circle.svg"
                      className="card-img-absolute"
                      alt="circle-image"
                    />
                    <h4 className="font-weight-normal mb-3">
                      Weekly Sales{" "}
                      <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                    </h4>
                    <h2 className="mb-5">$ 15,0000</h2>
                    <h6 className="card-text">Increased by 60%</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-4 stretch-card grid-margin">
                <div className="card bg-gradient-info card-img-holder text-white">
                  <div className="card-body">
                    <img
                      src="assets/images/dashboard/circle.svg"
                      className="card-img-absolute"
                      alt="circle-image"
                    />
                    <h4 className="font-weight-normal mb-3">
                      Weekly Orders{" "}
                      <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                    </h4>
                    <h2 className="mb-5">45,6334</h2>
                    <h6 className="card-text">Decreased by 10%</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-4 stretch-card grid-margin">
                <div className="card bg-gradient-success card-img-holder text-white">
                  <div className="card-body">
                    <img
                      src="assets/images/dashboard/circle.svg"
                      className="card-img-absolute"
                      alt="circle-image"
                    />
                    <h4 className="font-weight-normal mb-3">
                      Visitors Online{" "}
                      <i className="mdi mdi-diamond mdi-24px float-right"></i>
                    </h4>
                    <h2 className="mb-5">95,5741</h2>
                    <h6 className="card-text">Increased by 5%</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="clearfix">
                      <h4 className="card-title float-left">
                        Visit And Sales Statistics
                      </h4>
                      <div
                        id="visit-sale-chart-legend"
                        className="rounded-legend legend-horizontal legend-top-right float-right"
                      ></div>
                    </div>
                    <canvas id="visit-sale-chart" className="mt-4"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-md-5 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Traffic Sources</h4>
                    <canvas id="traffic-chart"></canvas>
                    <div
                      id="traffic-chart-legend"
                      className="rounded-legend legend-vertical legend-bottom-left pt-4"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="container-fluid d-flex justify-content-between">
              <span className="text-muted d-block text-center text-sm-start d-sm-inline-block">
                Coden UI - All Right Reserved
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
