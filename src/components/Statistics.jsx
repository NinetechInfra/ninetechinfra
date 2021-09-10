import React from "react";
import Statistic from "./common/Statistic";

const Statistics = (props) => {
  return (
    <>
      <div className="stats news-w3layouts jarallax">
        <div className="container">
          <div className="stats-agileinfo agileits-w3layouts">
            <Statistic
              title="Professionals"
              aos="fade-right"
              icon="fad fa-users"
              stats="50+"
              dmax="50"
              ddelay=".5"
            />
            <Statistic
              title="Visit last month"
              aos="fade-up"
              icon="fad fa-calendar-check"
              stats="6000+"
              dmax="4000"
              ddelay="2"
            />
            <Statistic
              title="Fields"
              aos="fade-down"
              icon="fad fa-briefcase"
              stats="46+"
              dmax="46"
              ddelay=".5"
            />
            <Statistic
              title="Projects"
              aos="fade-left"
              icon="fad fa-trophy"
              stats="110+"
              dmax="110"
              ddelay="8"
            />
            <Statistic
              title="Paper"
              aos="fade-right"
              icon="fad fa-file-alt"
              stats="500+"
              dmax="70"
              ddelay="8"
            />
            <Statistic
              title="Collaborators"
              aos="fade-up"
              icon="fad fa-handshake"
              stats="20+"
              dmax="50"
              ddelay="8"
            />
            <div className="clearfix" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
