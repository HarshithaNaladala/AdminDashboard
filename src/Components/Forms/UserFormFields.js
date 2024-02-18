import React from 'react';
import './UserFormFields.css';

export default function UserFormFields({ user, firstName, lastName, campusEmail, handleUserChange, handleFirstNameChange, handleLastNameChange, handleCampusEmailChange, flexDirection }) {
  return (
    <>
      <div className='user' style={{ display: 'flex', flexDirection }}>
        <label>User</label>
        <input 
            type="text" 
            name="user" 
            className='user-input' 
            placeholder='User' 
            value={user} 
            onChange={handleUserChange}>
        </input>
      </div>
      <div className='fullname' style={{ display: 'flex', flexDirection }}>
        <label>Name</label>
        <input 
            type="text" 
            name="First name" 
            className='f-input' 
            placeholder='First name' 
            value={firstName} 
            onChange={handleFirstNameChange}>
        </input>
        <input 
            type="text" 
            name="Last name" 
            className='l-input' 
            placeholder='Last Name' 
            value={lastName} 
            onChange={handleLastNameChange}>
        </input>
      </div>
      <div className='email' style={{ display: 'flex', flexDirection }}>
        <label>Campus Email</label>
        <input 
             type="email" 
             name="sample@example.com" 
             className='email-input' 
             placeholder='sample@example.com' 
             value={campusEmail} 
             onChange={handleCampusEmailChange}>
        </input>
      </div>
    </>
  );
}