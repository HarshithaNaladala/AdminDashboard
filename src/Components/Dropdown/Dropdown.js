import React, { useState, useEffect } from "react";
import './Dropdown.css';

export default function Dropdown({ onTableClick, onSelectSemester }) {
  const [selectedTable, setSelectedTable] = useState('');
  const [semesterOptions, setSemesterOptions] = useState([]);

  useEffect(() => {
    async function fetchSemesters() {
      try {
        const response = await fetch('https://learningtoolsdev.gsu.edu/lti_tools/admindashboard/semesters?token=9264211c-c9e0-46ac-82a5-44681310be84');
        if (response.ok) {
          const data = await response.json();
          setSemesterOptions(data);
        } else {
          console.error('API request failed');
        }
      } catch (error) {
        console.error('API request error:', error);
      }
    }

    fetchSemesters();
  }, []);

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
    onTableClick(parseInt(event.target.value));
  };

  const handleSemesterChange = (event) => {
    console.log('semester:',event.target.value);
    const selectedSemesterValue = event.target.value;
    onSelectSemester(selectedSemesterValue);
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

      {selectedTable && semesterOptions.length > 0 && (
        <div className="semester">
          <label htmlFor="semester-select">Select a semester: </label>
          <select id="semester-select" onChange={handleSemesterChange}>
            <option value="">Select Semester</option>
            {semesterOptions.map((semester, index) => (
              <option key={index} value={semester.SemesterName}>
                {semester.SemesterName}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}








