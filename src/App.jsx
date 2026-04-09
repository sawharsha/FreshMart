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
import About from "./pages/About";
import Help from "./pages/Help";

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
          element={<About/>}
        />

        <Route
          path="/help"
          element={<Help/>}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;