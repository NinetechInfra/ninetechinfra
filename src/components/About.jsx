import React from "react";
import { ListData } from "../services/DataService";
import Imgbox from "./common/Imgbox";
import Listbox from "./common/Listbox";
import Parabox from "./common/Parabox";
import aboutOne from "../images/NineTech-about-us-one.jpg";
import aboutTwo from "../images/NineTech-about-us-two.jpg";
const About = ({ path, head, para, aosText, ...rest }) => {
  return (
    <>
      <div className="banner-bottom" id="about">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            {head}
            <span>{para}</span>
          </h3>
          <div className="w3ls_banner_bottom_grids">
            <div className="container">
              {/* 1st block */}
              {path === "/about-us" ? (
                <Imgbox src={aboutOne} {...rest} />
              ) : null}
              <Parabox path={path} {...rest} aosText={aosText} />
            </div>
            <div className="container">
              {/* 2nd block */}
              <Listbox
                path={path}
                data={ListData}
                head="Our range of Civil Engineering skills and services"
                para="It include all kind of civil related servies and skills"
                aosText={aosText}
                {...rest}
              />
              {path === "/about-us" ? (
                <Imgbox src={aboutTwo} {...rest} />
              ) : null}
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
