import './Forms.css';
import React, { useState, useEffect } from 'react';
import BuildingSectionForm from '../BuildingSectionForm/BuildingSectionForm';
import UniversityRelatedForm from '../UniversityRelatedForm/UniversityRelatedForm';
import SandboxCourse from '../SandboxCourse/SandboxCourse';

export default function Forms(){
  const [selectedCourse, setSelectedCourse] = useState('');
  const [campusEmail, setCampusEmail] = useState('');
  const [user, setUser] = useState('');
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const [flexDirection, setFlexDirection] = useState('column');

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handleCampusEmailChange = (e) => {
    setCampusEmail(e.target.value);
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastName(e.target.value);
  };

  const resetUserForm = () => {
    console.log("entered resetform");
    setUser('');
    setFirstName('');
    setLastName('');
    setCampusEmail('');
  }

  useEffect(() => {
    const handleResize = () => {
      const newFlexDirection = window.innerWidth >= 768 ? 'row' : 'column';
      setFlexDirection(newFlexDirection);

    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return(
        <div className="form-container">
            <div className="title">Service-Now Form</div>
            <div className='form-body'>
                <form className='form'>
                <div className='user' style={{display: 'flex', flexDirection}}>
                        <label>User</label>
                        <input type="text" name="user" className='user-input' placeholder='User' value={user} onChange={handleUserChange}></input>
                    </div>
                    <div className='fullname' style={{display: 'flex', flexDirection}}>
                        <label>Name</label>
                        <input type="text" name="First name" className='f-input' placeholder='First name' value={firstName} onChange={handleFirstNameChange}></input>
                        <input type="text" name="Last name" className='l-input' placeholder='Last Name' value={lastName} onChange={handleLastnameChange}></input>
                    </div>
                    <div className='email' style={{display: 'flex', flexDirection}}>
                        <label>Campus Email</label>
                        <input type="email" name="sample@example.com" className='email-input' placeholder='sample@example.com' value={campusEmail} onChange={handleCampusEmailChange}></input>
                    </div>
                    <div className='course'>
                        <label className='course-label'>Please Select Your Desired Course Action</label>
                        <label className='bs'><input type="radio" name="course" value="building section" checked={selectedCourse === 'building section'} onChange={handleCourseChange}></input>{' '}Building Section</label>
                        <label className='ur'><input type="radio" name="course" value="university related" checked={selectedCourse === 'university related'} onChange={handleCourseChange}></input>{' '}University Related</label>
                        <label className='sc'><input type="radio" name="course" value="sandbox course" checked={selectedCourse === 'sandbox course'} onChange={handleCourseChange}></input>{' '}Sandbox Course</label>
                    </div>
                </form>
                {selectedCourse === 'building section' && <BuildingSectionForm  user={user} firstName={firstName} lastName={lastName} campusEmail={campusEmail} resetUserForm={resetUserForm}/>}
                {selectedCourse === 'university related' && <UniversityRelatedForm user={user} firstName={firstName} lastName={lastName} campusEmail={campusEmail} resetUserForm={resetUserForm}/>}
                {selectedCourse === 'sandbox course' && <SandboxCourse user={user} firstName={firstName} lastName={lastName} campusEmail={campusEmail} resetUserForm={resetUserForm}/>}
            </div>
        </div>
    )
}
