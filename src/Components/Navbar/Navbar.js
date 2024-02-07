import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import gsulogo from '../Assets/gsulogo.png';

function Navbar({onDashboardClick}){
    return(
        <nav style={{backgroundColor: '#0033a0'}}>
            <a href='index.html'>
            <img src={gsulogo} alt='gsu logo'></img>
            </a>
            <div className='name'>CETLOE</div>
            <div>
                <ul>
                    <li>
                        <Link to={"/"} className='dashboard' onClick={onDashboardClick}>Dashboard</Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;