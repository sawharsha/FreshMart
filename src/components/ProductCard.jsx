function ProductCard ({product , addToCart}) {
    return(
       <div className="product-card">
        <img
        className="product-card img"
        src={product.image}
        alt={product.name}
        />

        <h3>{product.name}</h3>

        <p>RS.{product.price}</p>

        <button
        onClick={()=> addToCart(product)} 
        >
            Add to cart
        </button>
       </div>


    );

}

export default ProductCard;