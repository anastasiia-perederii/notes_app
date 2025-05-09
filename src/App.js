import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotePage from "./pages/NotePage/NotePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/note/:id" element={<NotePage />} />
    </Routes>
  );
}

export default App;
