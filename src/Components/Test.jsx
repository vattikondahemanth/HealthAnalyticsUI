import React, { useEffect, useState } from "react";

// import { Column } from "./Column";
import { useTable } from "react-table";
import { useMemo } from "react";
import "./test.css";

const Test = (userData) => {
  let metaData = useMemo(() => userData.userData, []);
  let column = useMemo(() => userData.column, []);
  console.log(metaData);
  console.log(column);

  // console.log(metaData);
  // console.log(userData);
  let tableIntance = useTable({ metaData, column });
  let { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableIntance;

  return <div>dssa</div>;
};

export default React.memo(Test);
