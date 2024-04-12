import React, { useState } from "react";
import "./Subnavbar.css";
import { Link } from "react-router-dom";

export default function Subnavbar({ onFormClick, onTablesClick, onLogsClick, show = true}) {
  const [activeTab, setActiveTab] = useState("forms");

  if (show !== true) {
    return null;
  }

  return (
    <div className="subnavbar-container">
      <ul>
        <li className={`List ${activeTab === "forms" ? "active" : ""}`}>
          <Link
            to={"/"}
            className="forms"
            onClick={() => {
              setActiveTab("forms");
              onFormClick();
            }}
          >
            Course Creation
          </Link>
        </li>
        <li className={`List ${activeTab === "tables" ? "active" : ""}`}>
          <Link
            to={"/"}
            className="tables"
            onClick={() => {
              setActiveTab("tables");
              onTablesClick();
            }}
          >
            FERPA Enrollment Tables
          </Link>
        </li>
        <li className={`List ${activeTab === "logs" ? "active" : ""}`}>
          <Link
            to={"/"}
            className="logs"
            onClick={() => {
              setActiveTab("logs");
              onLogsClick();
            }}
          >
            Course Creation Log
          </Link>
        </li>
      </ul>
    </div>
  );
}