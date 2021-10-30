import React from "react";
import About from "../components/About";

const AboutPage = (props) => {
  const { pathname: path } = props.location;
  return (
    <>
      <About
        path={path}
        head="About Us"
        para="We Provide Best Project according to user needs with effective
      work."
        alt="about-img"
        quote="dwld"
        aosText="fade-down"
        aosImg="fade-up"
      />
    </>
  );
};
export default AboutPage;
