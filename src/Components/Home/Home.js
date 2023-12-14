import Navbar from "../Navbar/Navbar";
import React, { useState } from 'react';
import Forms from "../Forms/Forms";
import Tables from "../Tables/Tables";
import './Home.css';
import Subnavbar from "../SubNavbar/Subnavbar";

function Home(){

    const [ showSubnavbar , setShowSubnavbar ] = useState(true);
    const [ showForm, setShowForm ] = useState(true);
    const [ showTables, setShowTables ] = useState(false);

    const toggleTables = () =>
    {
        setShowTables(!showTables);
        setShowForm(false);
    }

    const toggleForm = () =>
    {
        setShowForm(!showForm);
        setShowTables(false);
    }

    const toggleSubnavbar = () =>
    {
        setShowSubnavbar(!showSubnavbar);
    }

    return(
        <div className="main">
            <Navbar onDashboardClick={toggleSubnavbar}/>  
            <div className="body">
                <div className="sub-nav">
                    {showSubnavbar && <Subnavbar onFormClick={toggleForm} onTablesClick={toggleTables}/>}
                </div>
                <div className="body">
                    {showForm && showSubnavbar && <Forms/>}
                    {showTables && showSubnavbar && <Tables/>}
                </div>
            </div>
        </div>
    )
}

export default Home;