function Cart({
    cartItems,
    increaseQty,
    decreaseQty,
    removeItems,
    purchaseItems
}){

    const total = cartItems.reduce(
        (sum,item)=> 
            sum+ item.price* item.quantity,0
    );

    return(
        <div className="cart">
            <h2>🛒 Cart</h2>

            {cartItems.length===0 ?(
                <p>Cart is Empty</p>
            ):(
                <>
                {cartItems.map((item) => (
                    <div className="cart-item"
                    key={item.id  }
                    >
                        <span>{item.name}</span>

                        <span>Rs.{item.price}</span>

                        <div className="qty">

                            <button 
                            onClick={()=> {decreaseQty(item.id)}}
                            >
                                ➖
                            </button>

                            <span>
                                {item.quantity}
                            </span>

                            <button onClick={()=>{increaseQty(item.id)}}>
                                ➕
                            </button>

                        </div>

                        <button
                        className="remove-btn"
                        onClick={()=>{removeItems(item.id)}}
                        >
                            ❌
                        </button>


                    </div>
                ))
                }

                <h3>
                    Total: {total}
                </h3>

                <button
                className="purchase-btn"
                onClick={purchaseItems}
                >
                    Purchase
                </button>
                </>
            )}
        </div>
    );

}

export default Cart;