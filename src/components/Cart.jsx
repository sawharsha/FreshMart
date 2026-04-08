import React from "react";

import {
  useSelector,
  useDispatch
} from "react-redux";

import {

  increaseQty,
  decreaseQty,
  removeItems,
  purchaseItems

} from "../Service/store";

function Cart() {

  const cartItems = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (

    <div className="cart">

      <h2>🛒 Cart</h2>

      {cartItems.length === 0 ? (

        <p>Cart is Empty</p>

      ) : (

        <>

          {cartItems.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              <span>{item.name}</span>
              

              <span>₹ {item.price}</span>

              <div className="qty">

                <button
                  onClick={() =>
                    dispatch(
                      decreaseQty(item.id)
                    )
                  }
                >
                  ➖
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    dispatch(
                      increaseQty(item.id)
                    )
                  }
                >
                  ➕
                </button>

              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  dispatch(
                    removeItems(item.id)
                  )
                }
              >
                ❌
              </button>

            </div>

          ))}

          <h3>
            Total: ₹ {total}
          </h3>

          <button
            className="purchase-btn"
            onClick={() =>
              dispatch(purchaseItems())
            }
          >
            Purchase
          </button>

        </>

      )}

    </div>

  );

}

export default Cart;