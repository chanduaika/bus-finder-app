import React, { useState, useEffect } from "react";
import BusForm from "./BusForm";

const LOCAL_KEY = "APSRTC_BUSES";

const AdminPanel = () => {
  const [buses, setBuses] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // Load buses from localStorage on page load
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
    setBuses(data);
  }, []);

  // Save buses to localStorage every time they change
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(buses));
  }, [buses]);

  const handleAdd = (bus) => {
    const updated = [...buses.filter((b) => b.number !== bus.number), bus];
    setBuses(updated);
  };

  const handleDelete = (busNumber) => {
    const filtered = buses.filter((b) => b.number !== busNumber);
    setBuses(filtered);
  };

  const handleLogin = () => {
    if (password === "chandu123") {
      setAuthenticated(true);
    } else {
      alert("❌ Incorrect password. Try again.");
    }
  };

  if (!authenticated) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>🔐 Admin Login</h2>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button onClick={handleLogin} style={{ padding: "8px 16px" }}>Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛠️ Admin Panel – Manage Bus Data</h2>
      <BusForm onAdd={handleAdd} />

      <h3>📋 All Buses:</h3>
      <ul>
        {buses.map((bus, idx) => (
          <li key={idx}>
            <strong>{bus.number}</strong> → {bus.stops.join(" → ")}
            <button 
              onClick={() => handleDelete(bus.number)} 
              style={{ marginLeft: "10px", color: "red" }}
            >
              🗑️ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
