import { Link } from "react-router-dom";

const HeaderComponent = () => (
  <header className="nav-bar">
    <div className="logo-container">
      <h1 className="logo">fooDie</h1>
    </div>
    <div className="menu-container">
      <ul>
        <li>
          <Link
            className="nav-menu-item"
            to="/"
            style={{ textDecoration: "none" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="nav-menu-item"
            to="/about"
            style={{ textDecoration: "none" }}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className="nav-menu-item"
            to="/contact"
            style={{ textDecoration: "none" }}
          >
            Contact Us
          </Link>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  </header>
);

export default HeaderComponent;
