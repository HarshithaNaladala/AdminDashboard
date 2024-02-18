import './UniversityRelatedForm.css';
import Modal from '../Modal/Modal';
import UniversityRelatedFormData from './UniversityRelatedFormData';
import URFormSubmitHandler from './URFormSubmitHandler';
import UniversityRelatedFormFields from './UniversityRelatedFormFields';


export default function UniversityRelatedForm({user, firstName, lastName, campusEmail, resetUserForm}){

    const {
        courseName,
        campusId,
        handleCourseNameChange,
        handleCampusIdChange,
        resetUniversityRelatedForm,
    } = UniversityRelatedFormData();

    const { handleSubmit, modalIsOpen, modalMessage, closeModal } = URFormSubmitHandler({
        user,
        firstName,
        lastName,
        campusEmail,
        courseName,
        campusId,
        resetUniversityRelatedForm,
        resetUserForm,
    });

    const renderUniversityRelatedFormFields = () => {
        return (
            <div>
                <UniversityRelatedFormFields
                    courseName={courseName}
                    campusId={campusId}
                    handleCourseNameChange={handleCourseNameChange}
                    handleCampusIdChange={handleCampusIdChange}
                />
            </div>
        );
    };

    return(
        <div className="UniversityRelatedForm-container">
        <div>
            <form className='UniversityRelatedForm' onSubmit={handleSubmit}>
                {renderUniversityRelatedFormFields()}
                <div className='buttons'>
                    <button type="submit" className='createthesection'>Create Section</button>
                </div>
            </form>
        </div>

        <Modal isOpen={modalIsOpen} message={modalMessage} closeModal={closeModal} />
    </div>
    );
}