import React from "react";
import { useParams, useNavigate } from "react-router";
import Layout from "../components/Layout/Layout";
import NoteEditor from "../components/NoteEditor";

const NotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const note = { id, title: "New Note", content: "" };

  const handleSave = (updateNote) => {
    console.log("Saved:", updateNote);
    navigate("/");
  };

  return (
    <Layout>
      <NoteEditor note={note} onSave={handleSave} />
    </Layout>
  );
};

export default NotePage;
