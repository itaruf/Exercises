import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"

/**
 * Composant qui permet l'affichage de la Navbar et de l'intéraction avec celle-ci
 */
const Navbar = () => {
  return (
    <nav>
      <NavLink id="linkToHome" exact to="/home">
        <h1 className="h1Nav"> W E B M O N </h1>
      </NavLink>

      <ul>
        <li>
          <NavLink id="linkToLogin" activeClassName="current" className="btn-nav" exact to="/login">
            CONNEXION
          </NavLink>
        </li>
        <li>
          <NavLink id="linkToRegister" activeClassName="current" className="btn-nav" exact to="/register">
            INSCRIPTION
         </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
