import React from "react";
import { Table } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Tablebody from "./common/Tablebody";
import Tablehead from "./common/Tablehead";

const Tables = ({ tablebody, tablehead, column }) => {
  return (
    <>
      <div className="container">
        <Table className="table text-center">
          <Tablehead data={tablehead} />
          <Tablebody data={tablebody} column={column} />
        </Table>
      </div>
    </>
  );
};

export default Tables;
