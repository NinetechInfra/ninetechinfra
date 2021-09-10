import React from "react";
import { Link } from "react-router-dom";

const Homebanner = (props) => {
  return (
    <>
      <div className="w3-banner jarallax">
        <div className="banner">
          <div className="container">
            <div className="slider">
              <div id="top" className="callbacks_container-wrap">
                <ul className="rslides" id="slider3">
                  <li>
                    <div className="slider-info" data-aos="fade-left">
                      <h6 data-aos="zoom-in">
                        Highway, Traffic and Transportation consultants
                      </h6>
                      <h3
                        data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        style={{ textTransform: "none", letterSpacing: "2px" }}
                      >
                        Highway consultancy firm
                      </h3>
                      <p data-aos="fade-left" style={{ fontWeight: "bold" }}>
                        Get contact details and address of Transportation
                        Planning &amp; Consultancy Services, Transport Agency,
                        Transportation, Traffic And Highway Engineering.
                      </p>
                      <div className="more-button">
                        <Link
                          to="/services"
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          More Info
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homebanner;
