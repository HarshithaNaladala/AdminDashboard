import React, { useState } from "react";
import './Dropdown.css';
import SemesterDropdown from "./SemesterDropdown";
import SemesterFetcher from "./SemesterFetcher";

export default function Dropdown({ onTableClick, onSelectSemester, currentPage, setCurrentPage }) {
  const [selectedTable, setSelectedTable] = useState('');
  const [semesterOptions, setSemesterOptions] = useState([]);

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
    onTableClick(parseInt(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="Dropdown-container">
      <label htmlFor="table-select">Select a table: </label>
      <select id="table-select" onChange={handleTableChange}>
        <option value="">Select</option>
        <option value="1">Instructor Enrollments by Admins</option>
        <option value="2">Instructor Enrollments by Instructional Admins</option>
        <option value="3">TA Enrollments by Instructional Admins</option>
        <option value="4">TA Full Access Enrollments</option>
        <option value="5">TA Grader Enrollments</option>
      </select>

      {selectedTable && (
        <>
          <SemesterFetcher setSemesterOptions={setSemesterOptions} />
          {semesterOptions.length > 0 && (
            <SemesterDropdown semesterOptions={semesterOptions} onSelectSemester={onSelectSemester} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          )}
        </>
      )}
    </div>
  );
}








