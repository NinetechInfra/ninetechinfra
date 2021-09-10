import React from "react";
import Service from "../components/Service";
import Tables from "../components/Tables";
import {
  ProjectsList,
  servicebody,
  servicehead,
  serviceTable,
} from "../services/DataService";

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
    </>
  );
};
export default ServicePage;
