import React from "react";

const Address = ({ data }) => {
  return (
    <>
      <ul className="con_inner_text">
        {data.map((item) => (
          <li key={item.key}>
            <span className={item.icon} aria-hidden="true" />
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Address;
