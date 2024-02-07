import './BuildingSectionForm.css';
import { useState } from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';

export default function BuildingSectionForm({user, firstName, lastName, campusEmail, resetUserForm})
{
    const [subjectCode, setSubjectCode] = useState('');
    const [courseNumber, setCoursenumber] = useState('');
    const [semester, setSemester] = useState('');
    const [academicYear, setAcademicYear] = useState('');
    const [campusId, setCampusId] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleSubjectCodeChange = (e) => {
        setSubjectCode(e.target.value);
      };

    const handleCourseNumberChange = (e) => {
        setCoursenumber(e.target.value);
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

      const openModal = (message) => {
        setModalMessage(message);
        setModalIsOpen(true);
      }

      const closeModal = () => {
        setModalIsOpen(false);
      }

      const resetBuildingSectionForm = () => {
        setSubjectCode('');
        setCoursenumber('');
        setSemester('');
        setAcademicYear('');
        setCampusId('');
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

        else{
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
    
                const response = await axios.post('https://learningtoolsdev.gsu.edu/lti_tools/admindashboard/createcourse', data);
    
                console.log('API Response:', response.data);
                if(response.data==="Success"){
                    openModal("Course Section created successfully");

                    resetBuildingSectionForm();
                    resetUserForm();
                    e.target.reset();
                }
                else{
                    openModal("Requestor not found");
                }
                
            }
             catch (error) {
                console.error('API Error:', error);
                openModal("Error creating the section. Please try again");
            }
        }
    };

    return(
        <div className="BuildingSectionForm-container">
        <div className='BuildingSectionForm'>
            <form onSubmit={handleSubmit}>
                <div className='subjectcode'>
                    <label>Subject Code</label>
                    <input type="text" name="subjectcode" className='subjectcodeinput' placeholder='ex : engl' onChange={handleSubjectCodeChange}></input>
                </div>
                <div className='CourseNumber'>
                    <label>Course Number</label>
                    <input type="text" name="Course Number" className='cn-input' placeholder='ex : 1101' onChange={handleCourseNumberChange}></input>
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
                    <input type='text' name="campusid" className='campusid-input' onChange={handleCampusIdChange}></input>
                </div>
                <div className='buttons'>
                    <button type="submit" className='createthesection'>Create Section</button>
                </div>
            </form>
        </div>

        <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            content: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                height: '50px',
                padding: '10px',
                borderRadius: '8px',
                overflow: 'hidden',
                textAlign: 'center',
            },
        }}
        >
            <div>{modalMessage}</div>
            <button style={{float:'right'}} onClick={closeModal}>Close</button>
        </ReactModal>
    </div>
    );
}