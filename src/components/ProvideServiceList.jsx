import React from "react";
import {
  NormalServiceListOneData,
  NormalServiceListTwoData,
  NormalServiceListThreeData,
} from "../services/DataService";
import Imgbox from "./common/Imgbox";
import Listbox from "./common/Listbox";
const ProvideServiceList = ({
  mobileEquip,
  serviceOne,
  serviceTwo,
  path,
  head,
  para,
  aosText,
  ...rest
}) => {
  return (
    <>
      <div className="banner-bottom" id="about">
        <div className="container">
          <div className="w3ls_banner_bottom_grids">
            <div className="container">
              {/* 1st block */}
              <Listbox
                path={path}
                data={NormalServiceListOneData}
                head="Our Servies List"
                para="There are Services in which we Found to be expert in are:"
                aosText={aosText}
                {...rest}
              />
              {path === "/about-us" ? (
                <Imgbox src={serviceOne} {...rest} />
              ) : null}
            </div>
            {/* 2nd block */}
            <div className="container">
              {path === "/about-us" ? (
                <Imgbox src={serviceTwo} {...rest} />
              ) : null}
              <Listbox
                path={path}
                data={NormalServiceListTwoData}
                head=""
                para=""
                aosText={aosText}
                {...rest}
              />
            </div>
            {/* 3rd block */}
            <div className="container">
              <Listbox
                path={path}
                data={NormalServiceListThreeData}
                head="Mobile Testing"
                para="We have well equipped mobile testing laboratory which includes:"
                aosText={aosText}
                {...rest}
              />
              {path === "/about-us" ? (
                <Imgbox src={mobileEquip} {...rest} />
              ) : null}
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProvideServiceList;
