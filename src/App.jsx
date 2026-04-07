import { useState } from "react";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";


import "./App.css";

function App() {

  const [cartItems, setCartItems] =
    useState([]);
  //const [showCart, setShowCart] = useState(false);

  // Add to Cart
  const addToCart = (product) => {

    const itemExists =
      cartItems.find(
        (item) => item.id === product.id
      );

    if (itemExists) {

      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        )
      );

    } else {

      setCartItems([
        ...cartItems,
        { ...product, quantity: 1 },
      ]);

    }
  };

  // Increase Quantity
  const increaseQty = (id) => {

    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );

  };

  // Decrease Quantity
  const decreaseQty = (id) => {

    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );

  };

  // Remove Item
  const removeItem = (id) => {

    setCartItems(
      cartItems.filter(
        (item) => item.id !== id
      )
    );

  };

  // Purchase
  const purchaseItems = () => {

    alert("Purchase Successful ✅");

    setCartItems([]); // empty cart

  };

  return (
    <div>

      <Navbar
        cartCount={
          cartItems.reduce(
            (total, item) =>
              total + item.quantity,
            0
          )
        }
      />

      <ProductList
        addToCart={addToCart}
      />

      <Cart
        cartItems={cartItems}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeItems={removeItem}
        purchaseItems={purchaseItems}
      />

    </div>
  );
}

export default App;