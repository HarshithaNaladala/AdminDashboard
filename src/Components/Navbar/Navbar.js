import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import gsulogo from '../Assets/gsulogo.png';

function Navbar({onDashboardClick, onFormClick}){
  const linkOnClick = () => {
    onDashboardClick();
    onFormClick();
  };

  return(
    <nav style={{backgroundColor: "#0033a0"}}>
      <a href='index.html'>
        <img src={gsulogo} alt='gsu logo'></img>
      </a>
      <div className='name'>CETLOE</div>
      <div>
        <ul>
          <li>
            <NavLink to={"/"} className='dashboard' onClick={linkOnClick}>Dashboard</NavLink>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;