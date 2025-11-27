
import React from "react";
import "./Homepage.css";
import { FaSearch } from "react-icons/fa";
export default function Homepage() {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Search here......</h1>
      <div className="homepage-search">
        <input type="text" placeholder="Type a message..." />
        <button>
          <FaSearch size={20} />
        </button>
      </div>
    </div>
  );
}

