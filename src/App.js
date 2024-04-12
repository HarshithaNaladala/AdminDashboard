import { 
  HashRouter as Router,
  Route, 
  Routes, 
} from "react-router-dom";

import HomePage from "./Pages/Home/HomePage";
import Forms from "./Components/Forms/Forms";
import Tables from "./Components/Tables/Tables";
import LoginPage from "./Pages/Login/LoginPage";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/forms" element={<Forms />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/auth" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}