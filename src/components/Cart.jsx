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

    <div className="cart-container">

      <h2 className="cart-tittle">🛒 Cart</h2>

      {cartItems.length === 0 ? (

        <p className="cart-tittle">Cart is Empty</p>

      ) : (

        <>

          {cartItems.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              <span className="item-name">{item.name}</span>
              

              <span className="item-price">₹ {item.price}</span>

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

          <h3 className="total">
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