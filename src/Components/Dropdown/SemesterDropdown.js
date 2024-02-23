import React from "react";

export default function SemesterDropdown({ semesterOptions, onSelectSemester, currentPage, setCurrentPage }) {
  const handleSemesterChange = (event) => {
    const selectedSemesterValue = event.target.value;
    onSelectSemester(selectedSemesterValue);
    setCurrentPage(1);
  };

  return (
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
  );
}
