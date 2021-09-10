import React from "react";

const Footermenu = ({ head, data, aosType }) => {
  return (
    <>
      <div className="col-md-5 w3layouts_footer_grid" data-aos={aosType}>
        <h2>{head}</h2>
        <ul className="con_inner_text">
          {data.map((item) => (
            <li key={item.key}>
              <span className={item.icon} />
              <a href={item.url}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Footermenu;
