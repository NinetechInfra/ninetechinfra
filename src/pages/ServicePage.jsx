import React from "react";
import ProvideServiceList from "../components/ProvideServiceList";
import Service from "../components/Service";
import Tables from "../components/Tables";
import {
  ProjectsList,
  servicebody,
  servicehead,
  serviceTable,
} from "../services/DataService";
import mobileEquip from "../images/NineTech-mobile-testing-equipment.jpeg";
import serviceOne from "../images/NineTech-Service-Testing.jpg";
import serviceTwo from "../images/NineTech-Service-Testing-2.jpg";

const ServicePage = (props) => {
  const { pathname: path } = props.location;
  return (
    <>
      <Service
        path={path}
        data={ProjectsList}
        head="Services"
        para="We have been recognized as a leader in our field because of the
              expertise of our professional staff and our service-oriented
              philosophy."
        aosText="fade-down"
        aosImg="fade-up"
      />
      <Tables
        tablehead={servicehead}
        tablebody={servicebody}
        column={serviceTable}
      />
      <ProvideServiceList
        mobileEquip={mobileEquip}
        serviceOne={serviceOne}
        serviceTwo={serviceTwo}
        path="/about-us"
        alt="about-img"
        quote="dwld"
        aosText="fade-down"
        aosImg="fade-up"
      />
    </>
  );
};
export default ServicePage;
