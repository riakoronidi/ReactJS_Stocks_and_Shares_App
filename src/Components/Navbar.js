import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return(
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/market_stock">Market Stock</Link>
      </li>
    </ul>
  )
}

export default Navbar;
