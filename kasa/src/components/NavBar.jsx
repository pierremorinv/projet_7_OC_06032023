import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/"> Accueil</Link>
      <Link to="/about"> A propros</Link>
    </nav>
  );
};

export default NavBar;
