import React from "react";

const Imgbox = ({ aosImg, quote, src, alt }) => {
  return (
    <>
      <div className="col-md-6 agileits_services_grid" data-aos={aosImg}>
        <div className="w3_agile_services_grid1">
          <img
            src={src}
            alt={alt}
            className="img-responsive"
            width="100%"
            height="100%"
          />
          {/* <div className="w3_blur"/> */}
          <h5 className="text-center">{quote}</h5>
        </div>
      </div>
    </>
  );
};

export default Imgbox;
