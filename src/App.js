import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Forms from "./Components/Forms/Forms";
import Tables from "./Components/Tables/Tables";
import Auth from "./Components/Auth/Auth";

function App() {
  return (
    <Router basename="/admindashboard">
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/forms" element={<Forms />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;