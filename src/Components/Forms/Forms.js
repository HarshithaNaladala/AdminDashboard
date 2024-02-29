import "./Forms.css";
import React, { useState } from "react";
import BuildingSectionForm from "../BuildingSectionForm/BuildingSectionForm";
import UniversityRelatedForm from "../UniversityRelatedForm/UniversityRelatedForm";
import SandboxCourse from "../SandboxCourse/SandboxCourse";
import UserFormFields from "./UserFormFields";
import WindowResizeUseEffect from "./WindowResizeUseEffect";
import UserFormData from "./UserFormData";

export default function Forms() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [flexDirection, setFlexDirection] = useState("column");

  const {
    user,
    firstName,
    lastName,
    campusEmail,
    handleUserChange,
    handleFirstNameChange,
    handleLastNameChange,
    handleCampusEmailChange,
    resetUserForm,
  } = UserFormData();

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  WindowResizeUseEffect(() => {
    const newFlexDirection = window.innerWidth >= 768 ? "row" : "column";
    setFlexDirection(newFlexDirection);
  });

  const renderFormFields = () => (
    <UserFormFields
      user={user}
      firstName={firstName}
      lastName={lastName}
      campusEmail={campusEmail}
      handleUserChange={handleUserChange}
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
      handleCampusEmailChange={handleCampusEmailChange}
      flexDirection={flexDirection}
    />
  );

  const renderCourseForm = (Component) => (
    <Component
      user={user}
      firstName={firstName}
      lastName={lastName}
      campusEmail={campusEmail}
      resetUserForm={resetUserForm}
    />
  );

  return (
    <div className="form-container">
      <div className="title">Course Creation Form</div>
      <div className="form-body">
        <form className="form">
          {renderFormFields()}
          <div className="course">
            <label className="course-label">
              Please Select Your Desired Course Action
            </label>
            <label className="bs">
              <input
                type="radio"
                name="course"
                value="building section"
                checked={selectedCourse === "building section"}
                onChange={handleCourseChange}
              ></input>{" "}
              Building Section
            </label>
            <label className="ur">
              <input
                type="radio"
                name="course"
                value="university related"
                checked={selectedCourse === "university related"}
                onChange={handleCourseChange}
              ></input>{" "}
              University Related
            </label>
            <label className="sc">
              <input
                type="radio"
                name="course"
                value="sandbox course"
                checked={selectedCourse === "sandbox course"}
                onChange={handleCourseChange}
              ></input>{" "}
              Sandbox Course
            </label>
          </div>
        </form>
        {selectedCourse === "building section" &&
          renderCourseForm(BuildingSectionForm)}
        {selectedCourse === "university related" &&
          renderCourseForm(UniversityRelatedForm)}
        {selectedCourse === "sandbox course" && renderCourseForm(SandboxCourse)}
      </div>
    </div>
  );
}
