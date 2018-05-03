import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return(
    <ul>
      <li className="navBarButton">
        <Link to="/">Home</Link>
      </li>
      <li className="navBarButton">
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li className="navBarButton">
        <Link to="/market_stock">Stock Market</Link>
      </li>
    </ul>
  )
}

export default Navbar;
