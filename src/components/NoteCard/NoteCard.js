import React from "react";
import { Link } from "react-router-dom";
import "./NoteCard.css";

function NoteCard({ note }) {
  return (
    <Link to={`/notes/${note.id}`} className="note-card">
      <h3 className="note-card-title">{note.title}</h3>
      <p className="note-card-date">{note.date}</p>
    </Link>
  );
}

export default NoteCard;
