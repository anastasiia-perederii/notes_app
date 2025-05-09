import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./NotePage.css";

function NotePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <Layout>
      <div className="note-page">
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>
        <h2>Note #{id}</h2>
        <textarea className="note-textarea" placeholder="Enter text here..." />
      </div>
    </Layout>
  );
}

export default NotePage;
