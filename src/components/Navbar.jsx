import React, { useState } from "react";
import { Link } from "react-router-dom";
import nineTechLogo from "../images/NineTech-logo.png";
import { Stars } from "../services/DataService";
const Navbar = ({ phone }) => {
  const [activeId, setActiveId] = useState("");
  return (
    <>
      <div className="container-fluid">
        <div className="marquee_status"></div>
        <div className="left-content common-content">
          <span>
            {Stars.map((data) => (
              <i key={data.key} className={data.icon}></i>
            ))}
            &nbsp;<span className="badge rating-success">4.5/5</span>
          </span>
        </div>
        <div className="right-content common-content">
          <span>
            <a
              href={`https://wa.me/${phone}?text=I'm interested in (your need Or write your Own message here)`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp" /> {phone}
            </a>
          </span>
        </div>
      </div>
      <div className="navbar-common">
        <div className="wthree-different-dot">
          <div className="head">
            <div className="container-fluid">
              <div className="navbar-top">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <div
                    className="navbar-brand logo"
                    onClick={() => window.location.reload(false)}
                    data-tip="NineTech INFRA SOLUTION PVT LTD"
                  >
                    <span>
                      <Link to="/">
                        <img
                          className="NineTech-logo"
                          src={nineTechLogo}
                          alt="NineTech-logo"
                          width="50px"
                          height="auto"
                        />
                        <span className="logo-name"> NineTech</span>
                        <span className="small-text">INFRA SOLN PVT LTD</span>
                      </Link>
                    </span>
                  </div>
                </div>

                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-1"
                >
                  <ul className="nav navbar-nav link-effect-4">
                    <li
                      className={activeId === "home" ? "active" : ""}
                      onClick={() => {
                        setActiveId("home");
                        window.location.reload(false);
                      }}
                    >
                      <Link
                        to="/"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                        className="scroll"
                      >
                        Home
                      </Link>
                    </li>
                    <li
                      className={activeId === "about" ? "active" : ""}
                      onClick={() => setActiveId("about")}
                    >
                      <Link
                        to="/about-us"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                        className="scroll"
                      >
                        About
                      </Link>
                    </li>
                    {/* <li
                      className={activeId === "why" ? "active" : ""}
                      onClick={() => setActiveId("why")}
                    >
                      <Link
                        to="/why-us"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                        className="scroll"
                      >
                        Why Us
                      </Link>
                    </li> */}
                    {/*<li><Link to="/services" className="scroll">services</Link></li>*/}
                    {/* <li>
                      <Link
                        to="/services"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span data-letters="Pages">Services</span>
                        <span className="caret" />
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            to="/academic"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                            className="scroll"
                          >
                            {" "}
                            <i className="fa fa-angle-right" />
                            &nbsp;Dropdown menu 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/research"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                            className="scroll"
                          >
                            {" "}
                            <i className="fa fa-angle-right" />
                            &nbsp;Dropdown menu 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/proofreading"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                            className="scroll"
                          >
                            {" "}
                            <i className="fa fa-angle-right" />
                            &nbsp;Dropdown menu 3
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    <li
                      className={activeId === "service" ? "active" : ""}
                      onClick={() => setActiveId("service")}
                    >
                      <Link
                        to="/services"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                        className="scroll"
                      >
                        Service
                      </Link>
                    </li>
                    <li
                      className={activeId === "project" ? "active" : ""}
                      onClick={() => setActiveId("project")}
                    >
                      <Link
                        to="/projects"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                        className="scroll"
                      >
                        Project
                      </Link>
                    </li>
                    <li
                      className={activeId === "contact" ? "active" : ""}
                      onClick={() => setActiveId("contact")}
                    >
                      <Link
                        to="/contact-us"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                        className="scroll"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid white-border-line" />
    </>
  );
};

export default Navbar;
