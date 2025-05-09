import React from "react";
import Layout from "../../components/Layout/Layout";
import NoteCard from "../../components/NoteCard/NoteCard";
import AddNoteForm from "../../components/AddNoteForm/AddNoteForm";
import "./Home.css";

function Home({ notes, onAddNote }) {
  return (
    <Layout>
      <h2>All Notes</h2>
      <AddNoteForm onAddNote={onAddNote} />
      <div className="note-list">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
