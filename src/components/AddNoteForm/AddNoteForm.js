import { useState } from "react";
import "./AddNoteForm.css";

export default function AddNoteForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <form className="add-note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="add-note-input"
      />
      <button type="submit" className="add-note-button">
        Add Note
      </button>
    </form>
  );
}
