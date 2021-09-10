import React from "react";
import { userReviews } from "../services/DataService";
import Reviews from "./common/Reviews";

const Testimonial = ({ head, para }) => {
  return (
    <>
      <div className="clients-main jarallax" id="client">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            {head}
            <span className="thr">{para}</span>
          </h3>
          <Reviews data={userReviews} />
        </div>
      </div>
    </>
  );
};
export default Testimonial;
