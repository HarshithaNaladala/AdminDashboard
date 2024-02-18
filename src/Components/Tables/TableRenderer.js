import React from "react";
import TableInstructorData from "./TableInstructorData";
import TableInstructorInstructionalData from "./TableInstructorInstructionalData";
import TableTAData from "./TableTAData";
import TableTAFullData from "./TableTAFullData";
import TableTAGraderData from "./TableTAGraderData";

const TableRenderer = ({ 
    selectedTable, 
    selectedSemester,
    instructorData,
    instructorInstructionalData, 
    taInstructionalData, 
    taFullAccessData, 
    taGraderData, 
    currentPage, 
    itemsPerPage }) => 
{

  let tableComponent = null;

  switch (selectedTable) {
    case 1:
      if (instructorData.length > 0 && selectedSemester) {
        tableComponent = <TableInstructorData data={instructorData} currentPage={currentPage} itemsPerPage={itemsPerPage} />;
      }
      break;
    case 2:
      if (instructorInstructionalData.length > 0) {
        tableComponent = <TableInstructorInstructionalData data={instructorInstructionalData} currentPage={currentPage} itemsPerPage={itemsPerPage} />;
      }
      break;
    case 3:
      if (taInstructionalData.length > 0) {
        tableComponent = <TableTAData data={taInstructionalData} currentPage={currentPage} itemsPerPage={itemsPerPage} />;
      }
      break;
    case 4:
      if (taFullAccessData.length > 0 && selectedSemester) {
        tableComponent = <TableTAFullData data={taFullAccessData} currentPage={currentPage} itemsPerPage={itemsPerPage} />;
      }
      break;
    case 5:
      if (taGraderData.length > 0 && selectedSemester) {
        tableComponent = <TableTAGraderData data={taGraderData} currentPage={currentPage} itemsPerPage={itemsPerPage} />;
      }
      break;
    default:
      break;
  }

  return tableComponent;
};

export default TableRenderer;
