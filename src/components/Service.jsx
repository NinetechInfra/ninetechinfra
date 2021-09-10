import React, { useState } from "react";
import Imgbox from "./common/Imgbox";
import Listbox from "./common/Listbox";

const Service = ({ path, data, head, para, aosText, aosImg, ...rest }) => {
  const [item, setItem] = useState(data[0]);
  const [iKey, setIkey] = useState("");
  return (
    <>
      <div className="banner-bottom" id="service">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            {head}
            <span>{para}</span>
          </h3>
          <div className="container text-center mb-3">
            {data.map((project, i) => (
              <button
                key={project.key}
                className={
                  project.key === iKey
                    ? "btn btn-sm projects-btn btn-primary"
                    : "btn btn-sm projects-btn btn-outline-primary"
                }
                onClick={() => {
                  setItem(data[i]);
                  project.key ? setIkey(project.key) : setIkey("");
                  // setShown(true);
                }}
              >
                {project.title}
              </button>
            ))}
          </div>
          <div className="w3ls_banner_bottom_grids">
            <Imgbox
              quote={`NineTech - Best ${item.title} Projects.`}
              src={item.src}
              alt={item.alt}
              {...rest}
            />
            <Listbox
              path={path}
              data={item.list}
              head={`# ${item.title} Projects`}
              para={`Trending ${item.title} Project Details.`}
              aosText={aosText}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
