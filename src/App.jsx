import React, { useState } from "react";
import BusFinder from "./components/BusFinder";
import AdminPanel from "./components/AdminPanel";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const appStyle = {
    backgroundColor: darkMode ? "#121212" : "#f9f9f9",
    color: darkMode ? "#f9f9f9" : "#121212",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  };

  const footerStyle = {
    textAlign: "center",
    padding: "1rem",
    background: darkMode ? "#1e1e1e" : "#f2f2f2",
    fontWeight: "bold",
    fontSize: "14px",
    color: darkMode ? "#aaa" : "#555"
  };

  return (
    <div style={appStyle}>
      {/* Top bar with toggles */}
      <div style={{ padding: "10px", textAlign: "right" }}>
        <button onClick={() => setDarkMode(!darkMode)} style={{ marginRight: "10px" }}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <button onClick={() => setIsAdmin(!isAdmin)}>
          {isAdmin ? "👤 User Mode" : "🔐 Admin Panel"}
        </button>
      </div>

      {/* App Title */}
      <h1 style={{ textAlign: "center", marginTop: "-10px" }}>
        APSRTC Bus Finder
      </h1>

      {/* Conditional Display */}
      {isAdmin ? <AdminPanel /> : <BusFinder />}

      {/* Footer */}
      <footer style={footerStyle}>
        Developed by Chandu Aika © 2025
      </footer>
    </div>
  );
}

export default App;

