import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotePage from "./pages/NotePage/NotePage";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (note) => {
    setNotes((prev) => [...prev, note]);
  };

  const handleUpdateNote = (updatedNote) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === updatedNote.id ? updatedNote : note)),
    );
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home notes={notes} onAddNote={handleAddNote} />}
      />
      <Route
        path="/note/:id"
        element={<NotePage notes={notes} onUpdateNote={handleUpdateNote} />}
      />
    </Routes>
  );
}

export default App;
