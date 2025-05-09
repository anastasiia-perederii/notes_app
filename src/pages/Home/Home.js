import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import NoteCard from "../../components/NoteCard/NoteCard";
import AddNoteForm from "../../components/AddNoteForm/AddNoteForm";
import "./Home.css";

function Home() {
  const [notes, setNotes] = useState([
    { id: 1, title: "First Note" },
    { id: 2, title: "Second Note" },
  ]);

  const handleAddNote = (title) => {
    const newNote = {
      id: Date.now(),
      title,
    };
    setNotes([newNote, ...notes]);
  };

  return (
    <Layout>
      <h2 className="home-title">All Notes</h2>
      <AddNoteForm onAdd={handleAddNote} />
      <div className="notes-grid">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
