import './SandboxCourse.css';
import axios from 'axios';

export default function SandboxCourse({user, firstName, lastName, campusEmail, resetUserForm}){

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!user || !firstName || !lastName || !campusEmail) {
            console.log('entered first if');
            window.alert("Please fill in all fields.");
            return;
          }

        else if (!emailRegex.test(campusEmail)) {
            console.log('enetered second if');
            window.alert("Please enter a valid campus email address.");
            return;
        }

        else{
            try {

                const data = {
                    token: '9264211c-c9e0-46ac-82a5-44681310be84',
                    courseType: 'Sandbox Course',
                    requestorEmail: campusEmail,
                }
    
                const response = await axios.post('https://learningtoolsdev.gsu.edu/lti_tools/admindashboard/createcourse', data);
    
                console.log('API Response:', response.data);
                if(response.data==="Success"){
                    window.alert("Course Section created successfully");

                    resetUserForm();
                }
                else{
                    window.alert("Requestor not found");
                }
            }
             catch (error) {
                console.error('API Error:', error);
                window.alert("Error creating the section. Please try again");
            }
        }
        
    };

    return(
        <div className="SandboxCourse-container">
        <div>
            <form className='SandboxCourse' onSubmit={handleSubmit}>
                <div className='noinfo'>
                    <label>There is no additional information needed.</label>
                </div>
                <div className='buttons'>
                    <button type="submit" className='createthesection'>Create the Section</button>
                </div>
            </form>
        </div>
    </div>
    );
}