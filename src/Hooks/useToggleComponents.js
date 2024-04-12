import { useState } from "react";

export default function useToggleComponents() {
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

  const toggleDefault = () => {
    setShowForm(true);
    setShowLogs(false);
    setShowTables(false);
  };

  const toggleLogs = () => {
    setShowLogs(!showLogs);
    setShowForm(false);
    setShowTables(false);
  };

  const toggleSubnavbar = () => {
    setShowSubnavbar(!showSubnavbar);
  };

  return { showSubnavbar, showForm, showTables, showLogs, toggleSubnavbar, toggleForm, toggleTables, toggleLogs };
}

