import React, { useState } from "react";
import { rAngle } from "../../services/Icons";

const Listbox = ({ path, id, data, head, para, aosText, ...rest }) => {
  const [viewMore, setViewMore] = useState(false);
  let icon = "fad fa-angle-";
  icon += viewMore ? "up" : "down";
  return (
    <>
      {path === "/about-us" ? (
        <>
          <div className="col-md-6 agileits_services_grid" data-aos={aosText}>
            <div className="col-md-12 agileits_services_grid">
              <h3>{head}</h3>
              <p>{para}</p>
              {data.map((item) => (
                <div key={item.key} data-aos={item.aosList}>
                  <p style={{ cursor: "pointer" }}>
                    <span
                      style={{
                        color: "#1d7ce2",
                        paddingRight: "5px",
                        fontSize: "18px",
                      }}
                    >
                      <i className={item.icon} />
                    </span>
                    <span>{item.para}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
      {path === "/services" ? (
        <div className="col-md-6 agileits_services_grid" data-aos={aosText}>
          <div className="col-md-12 agileits_services_grid">
            <h3>{head}</h3>
            <p>{para}</p>
            <ol className="container pl-5 col-md-12 col-sm-12 agileits_services_grid">
              {(viewMore ? data : data.slice(0, 5)).map((slist, index) => (
                <li key={index} className="mb-1">
                  <i className={`${rAngle} text-primary fw-bold`} /> &nbsp;
                  {slist}
                </li>
              ))}
              <button
                className="btn btn-sm btn-primary"
                onClick={() => {
                  setViewMore(!viewMore);
                }}
              >
                View {!viewMore ? "More" : "Less"} <i className={icon} />
              </button>
            </ol>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Listbox;
