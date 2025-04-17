import React, { useState, useEffect } from "react";
import BusForm from "./BusForm";

const LOCAL_KEY = "APSRTC_BUSES";

const AdminPanel = () => {
  const [buses, setBuses] = useState([]);

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
    setBuses([...buses, bus]);
  };

  const handleDelete = (busNumber) => {
    const filtered = buses.filter((b) => b.number !== busNumber);
    setBuses(filtered);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛠️ Admin Panel – Manage Bus Data</h2>
      <BusForm onAdd={handleAdd} />

      <h3>📋 All Buses:</h3>
      <ul>
        {buses.map((bus, idx) => (
          <li key={idx}>
            <strong>{bus.number}</strong> → {bus.stops.join(" → ")}
            <button onClick={() => handleDelete(bus.number)}>🗑️ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
