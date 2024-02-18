import './BuildingSectionFormFields.css';
import React from 'react';

export default function BuildingSectionFormFields({
  subjectCode,
  courseNumber,
  semester,
  academicYear,
  campusId,
  handleSubjectCodeChange,
  handleCourseNumberChange,
  handleSemesterChange,
  handleAcademicYearChange,
  handleCampusIdChange,
}) {
  return (
    <>
      <div className='subjectcode'>
        <label>Subject Code</label>
        <input type="text" name="subjectcode" className='subjectcodeinput' placeholder='ex : engl' value={subjectCode} onChange={handleSubjectCodeChange}></input>
      </div>
      <div className='CourseNumber'>
        <label>Course Number</label>
        <input type="text" name="Course Number" className='cn-input' placeholder='ex : 1101' value={courseNumber} onChange={handleCourseNumberChange}></input>
      </div>
      <div className='Semester'>
        <label>Semester</label>
        <select value={semester} className='semester-input' onChange={handleSemesterChange}>
          <option value="" disabled hidden>Select Semester</option>
          <option value="Fall">Fall</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
        </select>
      </div>
      <div className='AcademicYear'>
        <label>Academic Year</label>
        <select value={academicYear} className='academicyear-input' onChange={handleAcademicYearChange}>
          <option value="" disabled hidden>Select Academic Year</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
      <div className='CampusID'>
        <label>Campus IDs / Email Addresses of Additional Instructors</label>
        <input type='text' name="campusid" className='campusid-input' value={campusId} onChange={handleCampusIdChange}></input>
      </div>
    </>
  );
}
