import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>NeoBank</h2>
      </div>

      <nav className="sidebar-nav">
        <a href="#" className="active">
          Dashboard
        </a>
        <a href="#">Home</a>
        <a href="#">Username</a>
        <a href="#">Account</a>
        <a href="#">Login</a>
      </nav>

      <div className="sidebar-footer">
        <span>©️ 2025 Copyright</span>
      </div>
    </aside>
  );
}