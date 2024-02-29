import { useState } from 'react';

export default function UserFormData() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [campusEmail, setCampusEmail] = useState('');

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
    setFirstName('');
    setLastName('');
    setCampusEmail('');
  }

  return {
    firstName,
    lastName,
    campusEmail,
    handleFirstNameChange,
    handleLastNameChange,
    handleCampusEmailChange,
    resetUserForm,
  };
}
