import { useState } from 'react';

export default function BuildingSectionFormData() {
  const [subjectCode, setSubjectCode] = useState('');
  const [courseNumber, setCourseNumber] = useState('');
  const [semester, setSemester] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [campusId, setCampusId] = useState('');

  const handleSubjectCodeChange = (e) => {
    setSubjectCode(e.target.value);
  };

const handleCourseNumberChange = (e) => {
    setCourseNumber(e.target.value);
  };

const handleSemesterChange = (e) => {
    setSemester(e.target.value);
  };

const handleAcademicYearChange = (e) => {
    setAcademicYear(e.target.value);
  };

  const handleCampusIdChange = (e) => {
    setCampusId(e.target.value);
  };

  const resetBuildingSectionForm = () => {
    setSubjectCode('');
    setCourseNumber('');
    setSemester('');
    setAcademicYear('');
    setCampusId('');
  };

  return {
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
    resetBuildingSectionForm,
  };
}
