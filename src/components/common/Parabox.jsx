import React from "react";
import Imgbox from "./Imgbox";

const Parabox = ({ path, aosText, ...rest }) => {
  return (
    <>
      {path === "/about-us" ? (
        <>
          <Imgbox {...rest} />
          <div
            className="col-md-6 col-lg-6 agileits_services_grid"
            data-aos={aosText}
          >
            <h3>About NineTech Infra Solution</h3>
            <p>
              <b>NINETECH Infra Solutions</b> Pvt. Ltd. is a multi-disciplinary
              consulting organization staffed by eminent, experienced and
              qualified professionals, Highway Engineers, Transportation
              Planners, Bridge &amo; Structural Engineers, Urban &amp; Rural
              Planners, Water Resources Engineers, Architects, Ecologists,
              Environmental Engineers, Soil Scientists, Economists and Financial
              Experts.
            </p>
            <p>
              <b>NINETECH</b> also has an active panel of associate consultants
              and advisors with rich experience in various fields and
              internationally known in their fields of expertise. They cover a
              wide range of disciplines and specialties. This has in effect led
              to an integrated approach to planning, particularly for project,
              which have multi-disciplinary ramifications.
            </p>
          </div>
        </>
      ) : null}
      {path === "/about-us" ? (
        <>
          <div
            className="col-md-12 col-lg-12 agileits_services_grid"
            data-aos={aosText}
          >
            {/* <h3>About NineTech Infra Solution</h3> */}
            <p>
              <b>NINETECH</b> has one of its full-fledged Head Office located in
              Bangalore which is well equipped with the latest computer software
              and technology.
            </p>
            <p>
              <b>NINETECH</b> owns fully equipped Laboratory Accredited with
              NABL capable of testing Fine and Coarse Aggregates, Bitumen mixes
              and Samples, Fresh Concrete and Hardened Concrete, Destructive
              testing and Non- Destructive Testing on Concrete, Cement Blocks
              and Bricks, testing of soil subgrade and Job Mix Formulas for both
              Bituminous and Non Bituminous Mixes.
            </p>
            <p>
              <b>NINETECH’s</b> Fields of Specialization are: Transportation:
              Highways &amp; Bridges, Traffic &amp; Transportation Studies and
              Road Safety, Project Management &amp; Construction Supervision,
              Economic &amp; Social Studies, Architecture &amp; Urban Planning,
              Building Services: Electrical, Mechanical, HVAC, etc.. Structural
              Engineering: Building, Hydraulic &amp; Special Structures and
              Urban Infrastructure: Environmental Engineering &amp; Science.
            </p>
          </div>
        </>
      ) : null}
      {path === "/" ? (
        <>
          <Imgbox {...rest} />
          <div className="col-md-6 agileits_services_grid" data-aos={aosText}>
            <h3>About NineTech Infra Solution</h3>
            <p>
              <b>NINETECH</b> has developed into a premier consultancy
              organization providing consultancy from the stage of
              conceptualization to detailed planning and engineering for varied
              and diverse spectrum of projects. The services include
              pre-feasibility studies, detailed engineering studies for
              highways, bridges, traffic and transportation, water
              resources/irrigation projects, industrial complexes, urban
              infrastructure projects, etc.
            </p>
            <p>
              <b>NINETECH</b> provides project management of high professional
              standards having critical bearing on timely completion of large
              projects including contract administration and construction
              supervision, services for site investigations such as
              geo-physical, geo-technical, topographical and allied fields,
              detailed investigations for repair &amp; rehabilitation of bridges
              and structures.
            </p>
            <p>
              <b>NINETECH</b> provides excellent quality surveillance teams,
              which have made a mark in the assignments handled by our various
              divisions. <b>NINETECH</b> has one of its full-fledged Head Office
              located in Bangalore which is well equipped with the latest
              computer software and technology.
            </p>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Parabox;
