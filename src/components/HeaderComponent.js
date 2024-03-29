import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
  console.log(useOnlineStatus());
  return (
    <header className="nav-bar">
      <div className="logo-container">
        <h1 className="logo">bIteME</h1>
        <div
          className={"user-status " + (useOnlineStatus() ? "green" : "red")}
        ></div>
      </div>

      <div className="hamburger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="menu-container">
        <ul>
          <li>
            <Link
              className="nav-menu-item"
              to="/"
              style={{ textDecoration: "none", color: "rgb(90, 90, 90)" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-menu-item"
              to="/about"
              style={{ textDecoration: "none", color: "rgb(90, 90, 90)" }}
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
};

export default HeaderComponent;
