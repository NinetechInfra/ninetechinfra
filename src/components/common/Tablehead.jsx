import React from "react";
import { Thead, Tr, Th } from "react-super-responsive-table";

const Tablehead = ({ data }) => {
  return (
    <>
      <Thead className="table-color">
        <Tr>
          {data.map((item) => (
            <Th key={item.key}>{item.title}</Th>
          ))}
        </Tr>
      </Thead>
    </>
  );
};
export default Tablehead;
