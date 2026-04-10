import React from "react";
import { Link } from "react-router-dom";


import { useSelector }from "react-redux";

function Navbar() {

  const cartItems = useSelector(
    (state) => state.cart
  );

  const totalItems = cartItems.reduce(
    (sum, item) =>
      sum + item.quantity,
    0
  );

  return (

    <div className="navbar">

      <div className="logo-container">

        <img
          src="\assets\logo.png"
          alt="logo"
          className="logo"
        />

        <h2>FreshMart</h2>

      </div>

      <ul className="nav-menu">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/cart">
            Cart ({totalItems})
          </Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/help">Help</Link>
        </li>

      </ul>

    </div>

  );

}

export default Navbar;