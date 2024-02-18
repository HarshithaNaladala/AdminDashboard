import './SandboxCourse.css';
import Modal from '../Modal/Modal';
import SCFormSubmitHandler from './SCFormSubmitHandler';

export default function SandboxCourse({user, firstName, lastName, campusEmail, resetUserForm}){

    const { handleSubmit, modalIsOpen, modalMessage, closeModal } = SCFormSubmitHandler({
         user, 
         firstName, 
         lastName, 
         campusEmail, 
         resetUserForm 
    });

    return(
        <div className="SandboxCourse-container">
        <div>
            <form className='SandboxCourse' onSubmit={handleSubmit}>
                <div className='noinfo'>
                    <label>There is no additional information needed.</label>
                </div>
                <div className='buttons'>
                    <button type="submit" className='createthesection'>Create Section</button>
                </div>
            </form>
        </div>

        <Modal isOpen={modalIsOpen} message={modalMessage} closeModal={closeModal} />
    </div>
    );
}