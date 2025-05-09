import React from "react";
import "../Layout/Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="layout-header">NoteBoard</header>
      <main className="layout-main">{children}</main>
    </div>
  );
}

export default Layout;
