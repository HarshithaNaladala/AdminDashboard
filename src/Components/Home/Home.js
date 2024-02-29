import Navbar from "../Navbar/Navbar";
import React, { useState, useEffect } from "react";
import Forms from "../Forms/Forms";
import Tables from "../Tables/Tables";
import Logs from "../Logs/Logs";
import "./Home.css";
import Subnavbar from "../SubNavbar/Subnavbar";
import Footer from "../Footer/Footer";
import Auth from "../Auth/Auth";

function Home() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLoginUrl() {
      try {
        const response = await fetch(
          "https://learningtoolsdev.gsu.edu/admindashboard2/auth/loggedin"
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          console.error("Auth request failed");
        }
      } catch (error) {
        console.error("Auth request error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLoginUrl();
  }, []);

  const [showSubnavbar, setShowSubnavbar] = useState(true);
  const [showForm, setShowForm] = useState(true);
  const [showTables, setShowTables] = useState(false);
  const [showLogs, setShowLogs] = useState(false);

  const toggleTables = () => {
    setShowTables(!showTables);
    setShowForm(false);
    setShowLogs(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setShowTables(false);
    setShowLogs(false);
  };

  const toggleLogs = () => {
    setShowLogs(!showLogs);
    setShowForm(false);
    setShowTables(false);
  };

  const toggleSubnavbar = () => {
    setShowSubnavbar(!showSubnavbar);
  };

  /* For GSU Servers use if (user.d2lid) { */
  if (user.d2lid) {
    /* For localhost testing use if (1 == 1) { */
    //   if (1 == 1) {
    return (
      <div className="main">
        <Navbar onDashboardClick={toggleSubnavbar} />
        <div className="body">
          <div className="sub-nav">
            {showSubnavbar && (
              <Subnavbar
                onFormClick={toggleForm}
                onTablesClick={toggleTables}
                onLogsClick={toggleLogs}
              />
            )}
          </div>
          <div className="body">
            {showForm && showSubnavbar && <Forms />}
            {showTables && showSubnavbar && <Tables />}
            {showLogs && showSubnavbar && <Logs />}
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
  if (loading) {
    return <div className="spinner"></div>;
  }

  if (!loading) {
    return <Auth />;
  }
}

export default Home;