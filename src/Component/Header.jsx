import "./Header.css";
import { FaBell, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="app-header">
      <div className="app-header-logo">
        <div className="logo">
          <span className="logo-icon">
            <img
              src=""
              alt="logo"
            />
          </span>
          <h1 className="logo-title">
            <span>user</span>
          </h1>
        </div>
      </div>

      <div className="app-header-navigation">
        <div className="tabs">
          <a href="#">Home</a>
          <a href="#" className="active">
            Username
          </a>
          <a href="#">Account</a>
          <a href="#">System</a>
          <a href="#">Login</a>
        </div>
      </div>

      <div className="app-header-actions">
        <button className="user-profile">
          <span>Alexander</span>
          <span>
            <img src="/user-img.png" alt="" />
          </span>
        </button>

        <div className="app-header-actions-buttons">
          <button>
            <FaSearch size={20} />
          </button>
          <button>
            <FaBell size={20} />
          </button>
        </div>
      </div>

      <div className="app-header-mobile">
        <button className="icon-button large">
          <i className="ph-list"></i>
        </button>
      </div>
    </header>
  );
}