import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import NoteList from "./NoteList.css";

export default function NoteList({ notes }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}
