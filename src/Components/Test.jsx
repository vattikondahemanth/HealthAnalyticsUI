import React, { useEffect, useState } from "react";

// import { Column } from "./Column";
import { useTable, HttpError  } from "react-table";
import { useMemo } from "react";
import "./test.css";



const Test = (userData) => {
  let data = useMemo(() => userData.userData, []);
  let columns = useMemo(() => userData.columns, []);
  console.log(data);
  console.log(columns);
  // console.log(metaData);
  // console.log(userData);
  // let tableIntance = useTable({ metaData, column });
  // let { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   tableIntance;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  }  = useTable({columns, data})
  
  console.log("These are rows")
  console.log(rows)

  return (
    <div>
    <table {...getTableProps()}>
    <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
            </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} >
      {rows.map((row, i) => {
         prepareRow(row)
         return (
           <tr {...row.getRowProps()} >
             {row.cells.map(cell => {
               return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
             })}
           </tr>
         )
       })}
     </tbody>
    </table>
    </div>
)

return (<div>dsf</div>);

};

export default React.memo(Test);
