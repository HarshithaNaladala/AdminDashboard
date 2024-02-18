import { useState } from 'react';

export default function UserFormData() {
  const [user, setUser] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [campusEmail, setCampusEmail] = useState('');

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleCampusEmailChange = (e) => {
    setCampusEmail(e.target.value);
  };

  const resetUserForm = () => {
    setUser('');
    setFirstName('');
    setLastName('');
    setCampusEmail('');
  }

  return {
    user,
    firstName,
    lastName,
    campusEmail,
    handleUserChange,
    handleFirstNameChange,
    handleLastNameChange,
    handleCampusEmailChange,
    resetUserForm,
  };
}
