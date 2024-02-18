import { useState } from 'react';
import axios from 'axios';

export default function BSFormSubmitHandler({
  user,
  firstName,
  lastName,
  campusEmail,
  subjectCode,
  courseNumber,
  semester,
  academicYear,
  campusId,
  resetBuildingSectionForm,
  resetUserForm
}) 
{
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const openModal = (message) => {
    setModalMessage(message);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!user || !firstName || !lastName || !campusEmail || !subjectCode || !courseNumber || !semester || !academicYear) {
      openModal("Please fill in all fields.");
      return;
    }

    else if (!emailRegex.test(campusEmail)) {
      openModal("Requestor not found");
      return;
    }

    else {
      try {
        const data = {
          token: '9264211c-c9e0-46ac-82a5-44681310be84',
          courseType: 'Building Courses',
          requestorEmail: campusEmail,
          subjectCode,
          academicYear,
          courseNumber,
          semester,
          additionalInstructors: campusId,
        };

        // const response = await axios.post('https://learningtoolsdev.gsu.edu/lti_tools/admindashboard/createcourse', data);
        // const response = await axios.post('https://learningtoolsdev.gsu.edu/admindashboard/api/log?token=uwUdJxI/X17AOyqTDG9gY57pr7/QbGaFHGQtwsFDwEDvYgsccsVR4g==&page=1&name=j', data);
        const response = await axios.post('https://learningtoolsdev.gsu.edu/admindashboard/api/courses?token=uwUdJxI/X17AOyqTDG9gY57pr7/QbGaFHGQtwsFDwEDvYgsccsVR4g==', data);

        console.log('API Response:', response.data);
        if (response.data === "Success") {
          openModal("Course Section created successfully");

          resetBuildingSectionForm();
          resetUserForm();
          e.target.reset();
        }
        else {
          openModal("Requestor not found");
        }

      }
      catch (error) {
        console.error('API Error:', error);
        openModal("Error creating the section. Please try again");
      }
    }
  };

  return { handleSubmit, modalIsOpen, modalMessage, closeModal };
}
