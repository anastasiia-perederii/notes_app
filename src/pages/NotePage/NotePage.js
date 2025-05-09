import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./NotePage.css";

function NotePage({ notes, onUpdateNote }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((n) => n.id.toString() === id);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.title || "");
      setDescription(note.description || "");
    }
  }, [note]);

  const handleSave = () => {
    if (!title.trim()) return;

    onUpdateNote({ ...note, title, description });
    navigate("/");
  };

  if (!note) {
    return (
      <Layout>
        <p>Note not found.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="note-edit">
        <h2>Edit Note</h2>
        <input
          className="note-edit-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title"
        />
        <textarea
          className="note-edit-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Note description"
        />
        <div className="note-edit-buttons">
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="cancel-btn" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default NotePage;
