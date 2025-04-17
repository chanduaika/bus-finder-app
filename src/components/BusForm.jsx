import React, { useState } from "react";

const BusForm = ({ onAdd }) => {
  const [number, setNumber] = useState("");
  const [stops, setStops] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!number || !stops) return;

    const stopList = stops.split(",").map((s) => s.trim());
    onAdd({ number, stops: stopList });

    setNumber("");
    setStops("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        placeholder="Bus Number (e.g. 222R)"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <input
        placeholder="Stops (comma separated)"
        value={stops}
        onChange={(e) => setStops(e.target.value)}
      />
      <br />
      <button type="submit">➕ Add Bus</button>
    </form>
  );
};

export default BusForm;
