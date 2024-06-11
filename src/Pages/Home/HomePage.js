import { Navbar, Subnavbar, Footer, Forms, Tables, Logs } from "../../Components";
import LoginPage from "../Login/LoginPage";

import useLoadUser from "../../Hooks/useLoadUser";
import useToggleComponents from "../../Hooks/useToggleComponents";

function Home() {
  const { user, loading } = useLoadUser();
  const { 
    showSubnavbar, 
    showForm, 
    showTables, 
    showLogs, 
    toggleSubnavbar, 
    toggleForm, 
    toggleTables, 
    toggleLogs 
  } = useToggleComponents();

  if (loading) {
    return <div className="spinner"></div>;
  }

  // if (!loading) {
  //   return <LoginPage />;
  // }

  if (1 === 1) {
    return (
      <div className="main">
        <Navbar onDashboardClick={toggleSubnavbar} onFormClick={toggleForm} />
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
            {showForm && showSubnavbar && <Forms userName={user.name} />}
            {showTables && showSubnavbar && <Tables />}
            {showLogs && showSubnavbar && <Logs />}
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
