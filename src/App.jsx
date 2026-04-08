import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/about"
          element={<h2>About Page</h2>}
        />

        <Route
          path="/help"
          element={<h2>Help Page</h2>}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;