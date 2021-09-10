import React from "react";

const Social = ({ data }) => {
  return (
    <>
      <ul className="social_agileinfo">
        {data.map((item) => (
          <li key={item.key}>
            <a href={item.url} className={item.cName}>
              <i className={item.icon} />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Social;
