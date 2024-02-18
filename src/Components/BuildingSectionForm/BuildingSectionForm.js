import './BuildingSectionForm.css';
import Modal from '../Modal/Modal';
import BuildingSectionFormData from './BuildingSectionFormData';
import BSFormSubmitHandler from './BSFormSubmitHandler';
import BuildingSectionFormFields from './BuildingSectionFormFields';

export default function BuildingSectionForm({user, firstName, lastName, campusEmail, resetUserForm})
{
    const {
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
      } = BuildingSectionFormData();

    const { handleSubmit, modalIsOpen, modalMessage, closeModal } = BSFormSubmitHandler({
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
      });

    const renderBuildingSectionFormFields = () => (
        <BuildingSectionFormFields
          subjectCode={subjectCode}
          courseNumber={courseNumber}
          semester={semester}
          academicYear={academicYear}
          campusId={campusId}
          handleSubjectCodeChange={handleSubjectCodeChange}
          handleCourseNumberChange={handleCourseNumberChange}
          handleSemesterChange={handleSemesterChange}
          handleAcademicYearChange={handleAcademicYearChange}
          handleCampusIdChange={handleCampusIdChange}
        />
      );

    return(
        <div className="BuildingSectionForm-container">
        <div className='BuildingSectionForm'>
            <form onSubmit={handleSubmit}>
                {renderBuildingSectionFormFields()}
                <div className='buttons'>
                    <button type="submit" className='createthesection'>Create Section</button>
                </div>
            </form>
        </div>

        <Modal isOpen={modalIsOpen} message={modalMessage} closeModal={closeModal} />

    </div>
    );
}