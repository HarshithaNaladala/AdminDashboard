import { useState } from 'react';

const UniversityRelatedFormData = () => {
    const [courseName, setCourseName] = useState('');
    const [campusId, setCampusId] = useState('');

    const handleCourseNameChange = (e) => {
        setCourseName(e.target.value);
    };

    const handleCampusIdChange = (e) => {
        setCampusId(e.target.value);
    };

    const resetUniversityRelatedForm = () => {
        setCourseName('');
        setCampusId('');
    };

    return {
        courseName,
        campusId,
        handleCourseNameChange,
        handleCampusIdChange,
        resetUniversityRelatedForm,
    };
};

export default UniversityRelatedFormData;
