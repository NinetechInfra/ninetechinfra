import React from "react";
import { workbody, workhead, workTable } from "../services/DataService";
import Tables from "./Tables";

const Workdone = ({ head, para }) => {
  return (
    <>
      <div className="banner-bottom" id="about">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            {head}
            <span>{para}</span>
          </h3>
          <Tables
            tablehead={workhead}
            tablebody={workbody}
            column={workTable}
          />
        </div>
      </div>
    </>
  );
};

export default Workdone;
