import React from "react";
import "./FilterBar.css";

export default function FilterBar({ search, data, setSearch, setDate }) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="data"
        value={data}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
}
