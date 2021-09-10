import React from "react";
import { NavLink } from "react-router-dom";
import { Tbody, Tr, Td } from "react-super-responsive-table";
const Tablebody = ({ data, column }) => {
  return (
    <>
      <Tbody>
        {data.map((item, index) => (
          <Tr
            key={item.key}
            data-aos={index % 2 === 0 ? "zoom-in" : "zoom-out"}
          >
            <Td>{index + 1}</Td>
            {column.map((col) => (
              <Td key={col.id}>
                {col.id === "link" ? (
                  <NavLink
                    to={col.path}
                    title={`${item[col.tip]}`}
                    // data-tip={`${item[col.tip]}`}
                  >
                    {item[col.label]} {console.log(item[col.tip])}
                  </NavLink>
                ) : (
                  <>{item[col.label]}</>
                )}
              </Td>
            ))}
            {/* <Td>
              <Link>{item.name}</Link>
            </Td>
            <Td>{item.qualification}</Td>
            <Td>{item.specialization}</Td>
            <Td>{item.experience}</Td> */}
          </Tr>
        ))}
      </Tbody>
    </>
  );
};
export default Tablebody;
