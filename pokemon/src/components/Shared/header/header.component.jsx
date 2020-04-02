import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#3B3A3A" }}
    >
      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <Link to="/" className="btn btn-outline-danger">
              All Pokemons
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
export default Header;
