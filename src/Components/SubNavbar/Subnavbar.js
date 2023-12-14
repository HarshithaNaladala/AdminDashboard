import React from 'react';
import './Subnavbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Subnavbar({onFormClick, onTablesClick}){
    const [activeTab, setActiveTab] = useState('forms');

    return(
    <nav>
      <div className='subnavbar-container'>
        <ul>
          <li className={`List ${activeTab === 'forms' ? 'active' : ''}`}>
            <Link to={"/"} className='forms' onClick={() => { setActiveTab('forms'); onFormClick(); }}>Forms</Link>
          </li>
          <li className={`List ${activeTab === 'tables' ? 'active' : ''}`}>
            <Link to={"/"} className='tables' onClick={() => { setActiveTab('tables'); onTablesClick(); }}>Tables</Link>
          </li>
        </ul>
      </div>
    </nav>
    );
}