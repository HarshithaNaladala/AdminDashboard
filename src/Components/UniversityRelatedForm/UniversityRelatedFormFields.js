import React from 'react';
import './UniversityRelatedFormFields.css';

const UniversityRelatedFormFields = ({ courseName, campusId, handleCourseNameChange, handleCampusIdChange }) => {
    return (
        <div>
            <div className='requestedcoursename'>
                <label>Requested Course Name</label>
                <input type="text" name="subjectcode" value={courseName} className='requestedcoursenameinput' placeholder='' onChange={handleCourseNameChange}></input>
            </div>
            <div className='campusid'>
                <label>Campus IDs / Email Addresses of Additional Instructors</label>
                <input type="text" name="campusid" value={campusId} className='campusid-input' placeholder='' onChange={handleCampusIdChange}></input>
            </div>
        </div>
    );
};

export default UniversityRelatedFormFields;
