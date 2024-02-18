import Navbar from "../Navbar/Navbar";
import React, { useState } from 'react';
import Forms from "../Forms/Forms";
import Tables from "../Tables/Tables";
import Logs from "../Logs/Logs";
import './Home.css';
import Subnavbar from "../SubNavbar/Subnavbar";
import Footer from "../Footer/Footer";

function Home(){

    const [ showSubnavbar , setShowSubnavbar ] = useState(true);
    const [ showForm, setShowForm ] = useState(true);
    const [ showTables, setShowTables ] = useState(false);
    const [ showLogs, setShowLogs ] = useState(false);

    const toggleTables = () =>
    {
        setShowTables(!showTables);
        setShowForm(false);
        setShowLogs(false);
    }

    const toggleForm = () =>
    {
        setShowForm(!showForm);
        setShowTables(false);
        setShowLogs(false);
    }

    const toggleLogs = () => {
        setShowLogs(!showLogs);
        setShowForm(false);
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
                    {showSubnavbar && <Subnavbar onFormClick={toggleForm} onTablesClick={toggleTables} onLogsClick={toggleLogs}/>}
                </div>
                <div className="body">
                    {showForm && showSubnavbar && <Forms/>}
                    {showTables && showSubnavbar && <Tables/>}
                    {showLogs && showSubnavbar && <Logs/>}
                    <Footer></Footer>
                </div>
            </div>
        </div>
    )
}

export default Home;