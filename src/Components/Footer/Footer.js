import React from 'react';
import './Footer.css';
import gsulogo from '../Assets/gsu.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='main'>
        <div className='logo-class'>
          <img src={gsulogo} alt="Georgia State University"></img>
        </div>
        <div className='info'>
           <span>Georgia State University</span>
           <hr class="line"></hr>
           <span>
            <a href="https://map.concept3d.com/?id=1108#!m/295226?ce/0,22381,27051,27053?s/Sparks%20Hall?ct/0,22383,27114,27113,38302" target="_blank" rel="noreferrer">33 Gilmer Street SE Atlanta, GA</a>
           </span>
           <hr class="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical MuiDivider-flexItem divider css-1d7q5f8"></hr>
           <span>
            <a href="tel:+14044132000">404-413-2000</a>
           </span>
        </div>
        <div className='info2'>
           <a href="https://www.gsu.edu/contact-georgia-state/" target="_blank" rel="noreferrer">Contact Georgia State</a>
           <hr class="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical MuiDivider-flexItem divider css-1d7q5f8"></hr>
           <a href="https://www.gsu.edu/legal-statement" target="_blank" rel="noreferrer">View legal statement</a>
           <hr class="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical MuiDivider-flexItem divider css-1d7q5f8"></hr>
           <a href="https://www.gsu.edu/privacy-notices/" target="_blank" rel="noreferrer">Privacy Notices</a>
           <hr class="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical MuiDivider-flexItem divider css-1d7q5f8"></hr>
           <a href="https://gsu.edu/state-authorization" target="_blank" rel="noreferrer">State Authorization</a>
           <hr class="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical MuiDivider-flexItem divider css-1d7q5f8"></hr>
           <a href="https://gsu.uservoice.com" target="_blank" rel="noreferrer">Website Feedback</a>
           <hr class="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical MuiDivider-flexItem divider css-1d7q5f8"></hr>
           <span>©2023 Georgia State University</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;