import React from "react";
import About from "../components/About";
import Homebanner from "../components/Homebanner";
import Statistics from "../components/Statistics";
import Testimonial from "../components/Testimonial";
import { aboutimg } from "../services/DataService";

const HomePage = (props) => {
  const { pathname: path } = props.location;
  return (
    <>
      <Homebanner />
      <About
        path={path}
        head="who we are?"
        para="We Provide Best Project according to user needs with effective
      work."
        src={aboutimg}
        alt="about-img"
        quote="dwld"
        aosText="fade-down"
        aosImg="fade-up"
      />
      <Testimonial
        head="Testimonial"
        para="Events Is A Professionally Managed Event"
      />

      <Statistics />
    </>
  );
};

export default HomePage;
