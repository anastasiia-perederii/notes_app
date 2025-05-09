import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import NotesTable from "../components/NoteTable";

export default function Home() {
  const [notes] = useState([{ id: 1, title: "Note 1", date: "2025-05-07" }]);

  return (
    <Layout>
      <NotesTable notes={notes} />
    </Layout>
  );
}
