import React, { useState } from "react";
import "./AddNoteForm.css";

function AddNoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newNote = {
        id: Date.now().toString(),
        title,
        date: new Date().toLocaleDateString(),
        description: "",
      };
      onAddNote(newNote);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-note-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New note title"
        className="add-note-input"
      />
      <button type="submit" className="add-note-button">
        Add
      </button>
    </form>
  );
}

export default AddNoteForm;
