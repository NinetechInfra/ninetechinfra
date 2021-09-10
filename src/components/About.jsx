import React from "react";
import { ListData } from "../services/DataService";
import Listbox from "./common/Listbox";
import Parabox from "./common/Parabox";
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
            {/* 1st block */}
            <Parabox path={path} {...rest} aosText={aosText} />
            {/* 2nd block */}
            <Listbox
              path={path}
              data={ListData}
              head="Our range of Civil Engineering skills and services"
              para="It include all kind of civil related servies and skills"
              aosText={aosText}
              {...rest}
            />
            <div className="clearfix" />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
