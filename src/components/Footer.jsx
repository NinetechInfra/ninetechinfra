import React from "react";
import { addressInfo, menuInfo, socialInfo } from "../services/FooterService";
import Address from "./common/Address";
import Social from "./common/Social";
import Footermenu from "./Footermenu";

const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <div className="container-fluid mx-1">
          <div className="f-bg-w3l">
            <div
              className="col-md-7 w3layouts_footer_grid"
              data-aos="fade-right"
            >
              <h2>Contact Information</h2>
              <Address data={addressInfo} />
              <Social data={socialInfo} />
            </div>
            <Footermenu data={menuInfo} head="Menu" aosType="fade-left" />
            <div className="clearfix" />
          </div>
        </div>
        <p className="copyright">
          © 2021 NineTech Infr Solution. All Rights Reserved | Design by
          <a
            href="https://oneeyehealer.github.io"
            target="_blank"
            rel="noreferrer"
          >
            "OneEyeHealer"
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
